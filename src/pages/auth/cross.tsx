import React from 'react';
import { ServerWidget } from '@components/widgets/server';
import Head from 'next/head';
import CleanLayout from '@components/layouts/clean';
import { FormattedMessage } from 'react-intl';
import { Callout, CalloutSeverity } from '@components/widgets/callout';
import { injectClassNames } from '@/utils/css';
import styles from './auth.module.scss';
import CrossAuthButton from '@components/auth/crossAuthButton';
import { NextPageContext } from 'next';
import { getCookie } from 'cookies-next';
import buildQuery from '@/utils/request/build-query';
import { apiGet } from '@/utils/request';
import { HttpCodeError } from '@/utils/request/api-get';
import { MessageResponseDto } from '@/dto/response/message.dto';

interface ICrossAuthStartProps {
  code: string;
}

export default function AuthCross(props: ICrossAuthStartProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Zetter Gallery Minecraft Authorization Prompt</title>
        <meta
          name="description"
          content="Authorize Zetter Gallery to check your Minecraft Account"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CleanLayout>
        <Callout severity={CalloutSeverity.Warning}>
          {"If you don't see this message when connecting " +
            "Zetter Gallery, there's a chance that someone trying to steal your info."}
        </Callout>
        <section className={injectClassNames('block', 'sans-serif-font', styles['auth-prompt'])}>
          <header className={styles['heading']}>
            <h1>
              You are going to allow <wbr />
              Minecraft Server to act on behalf of your Zetter account
            </h1>
          </header>
          <div className={styles['disclaimer-wrapper']}>
            <h2>
              <FormattedMessage
                id="auth-prompt.disclaimer.title"
                defaultMessage="Why do I need that?"
                description="Title for request explanation"
              />
            </h2>
            <div className={styles['disclaimer']}>
              <p>
                <FormattedMessage
                  id="auth-prompt.microsoft.disclaimer.why"
                  defaultMessage="To prove that you are the real player playing on a real server and it's not just automated requests."
                  description="Why do we need player to authorize us with Microsoft account"
                />
              </p>
              <p>
                <FormattedMessage
                  id="auth-prompt.microsoft.disclaimer.what-for"
                  defaultMessage="This allows server to purchase and submit paintings on your behalf when you trading with painting merchant."
                  description="Why do we need player to authorize us with Microsoft account"
                />
              </p>
            </div>
          </div>
          <div className={styles['check-wrapper']}>
            <h2>
              <FormattedMessage
                id="auth-prompt.check.title"
                defaultMessage="How to make sure I am safe?"
                description="Title for security warning"
              />
            </h2>
            <div className={styles['check']}>
              <p>
                <FormattedMessage
                  id="microsoft-auth-check-advice"
                  defaultMessage="Good you asked! Just check that server described below is the one that you're playing on right now."
                  description="Explain how to make sure it's not a phishing page"
                />
              </p>
              <ServerWidget name={'Minecraft server'} ip={'127.0.0.1'} />
            </div>
          </div>
          <div className={styles['action-wrapper']}>
            <CrossAuthButton code={props.code} />
          </div>
          <footer className={styles['footer']}>
            {'Thank you for paying attention.'}
          </footer>
        </section>
      </CleanLayout>
    </>
  );
}

/**
 * @param context
 */
export async function getServerSideProps(context: NextPageContext) {
  // @todo: redirect if token revoked
  // @todo: helper function for token check
  // @todo: notify if code outdated
  const token = getCookie('token', { req: context.req, res: context.res });

  if (!token) {
    const callbackQuery = buildQuery({ from: context.req?.url });

    return {
      redirect: {
        destination: '/auth/start' + callbackQuery,
        permanent: false,
      },
    };
  }

  const code = context.query.code;

  if (!code) {
    const errorQuery = buildQuery({ message: 'auth.cross.error.missing-code' });

    return {
      redirect: {
        destination: '/400' + errorQuery,
        permanent: false,
      },
    };
  }

  try {
    const result = await apiGet<MessageResponseDto>(
      '/auth/cross-authorization/check',
      { crossAuthorizationCode: code },
      context,
    );
  } catch (e) {
    if (e instanceof HttpCodeError) {
      return {
        redirect: {
          destination: '/' + e.response.status,
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      code: code,
    },
  };
}

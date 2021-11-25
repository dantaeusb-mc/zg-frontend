import React from 'react';
import DefaultLayout, { CleanLayout } from '@components/layout';
import AuthPrompt from '@components/authPrompt/Auth.component';
import Head from "next/head";
import CraftGrid from "@components/craftGrid";
import {
  PaperItem,
  AnyPlanksItem,
  PlanksSlabItem,
  StickItem,
  IronNuggetItem,
  DarkOakPlanksItem,
  LeatherItem,
  GoldNuggetItem,
  GlassPaneItem,
  EmeraldItem,
  GoldIngotItem,
  RedDyeItem,
  GreenDyeItem,
  BlueDyeItem, WhiteDyeItem, BlackDyeItem, CyanDyeItem, MagentaDyeItem, YellowDyeItem
} from "@/const/minecraftItems";
import {
  ArtistTableItem,
  CanvasItem,
  DarkOakPlatedFrameItem,
  EaselItem, GoldPlatedFrameItem, GoldPlatedFrameWithPaintingItem, IronFrameItem, OakFrameItem, PaintingItem,
  PaintsItem,
  PaletteItem, WarpedPlatedFrameItem, WarpedPlatedFrameWithPaintingItem
} from "@/const/zetterItems";
import {defineMessage, FormattedMessage, useIntl} from "react-intl";
import WikiLayout from "@components/wikiLayout";
import {GetStaticProps, GetStaticPropsContext, GetStaticPropsResult} from "next";
import {IWikiLayoutProps, IWikiPageProps} from "@components/wikiLayout/WikiLayout.component";
import styles from '../wiki.module.scss';

defineMessage({
  id: 'wiki.zetter.recipes.page',
  description: 'Zetter Wiki Recipes Page Navigation Title',
  defaultMessage: 'Recipes',
});

interface IZetterWikiRecipeProps extends IWikiLayoutProps {

}

export default function ZetterWikiRecipes({ pages }: IZetterWikiRecipeProps): JSX.Element {
  const intl = useIntl();

  return (<>
    <Head>
      <title>Zetter Wiki at Zetter Gallery</title>
      <meta name="description" content="Zetter craft recipes and help" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <WikiLayout pages={ pages }>
      { ( addSection ) => {
        return (<article>
          <h1>
            <FormattedMessage id={ "wiki.zetter.recipes.title" } defaultMessage="Zetter Wiki Recipes"
                              description="Title for Zetter Wiki Recipes Page" />
          </h1>
          <section id="crafting" ref={ addSection(intl.formatMessage({
            id: "wiki.zetter.recipes.easel.section",
            defaultMessage: 'Easel'
          }), 'crafting') }>
            <h2 id="easel">
              <FormattedMessage id={ "wiki.zetter.recipes.easel.title" } defaultMessage="Easel" />
            </h2>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ AnyPlanksItem, AnyPlanksItem, null, AnyPlanksItem, AnyPlanksItem, null, StickItem, StickItem, null ] } output={ EaselItem } shapeless={ false } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.easel" }
                                defaultMessage="Easel is a starting point for all paintings. In order to start drawing, you would need to place one in the world, put canvas on it by right-clicking with canvas in hand. Simple right click will open easel UI. You would also need to put a palette into special slot. Shift-right click with empty hand will retract canvas from easel."
                                description="Explain what is painting" />
            </p>
          </section>
          <section id="paints" ref={ addSection(intl.formatMessage({
            id: "wiki.zetter.recipes.paints.section",
            defaultMessage: 'Paints'
          }), 'paints') }>
            <h2 id="paints">
              <FormattedMessage id={ "wiki.zetter.recipes.paints.title" } defaultMessage="Paints" />
            </h2>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ RedDyeItem, GreenDyeItem, BlueDyeItem, WhiteDyeItem, BlackDyeItem, null, null, null, null ] } output={ PaintsItem } shapeless={ true } />
              <CraftGrid items={ [ CyanDyeItem, MagentaDyeItem, YellowDyeItem, WhiteDyeItem, BlackDyeItem, null, null, null, null ] } output={ PaintsItem } shapeless={ true } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.paints" }
                                defaultMessage="Paints are used to create or recharge a palette."
                                description="Explain what is painting" />
            </p>
          </section>
          <section id="palette" ref={ addSection(intl.formatMessage({
            id: "wiki.zetter.recipes.palette.section",
            defaultMessage: 'Palette'
          }), 'palette') }>
            <h2 id="palette">
              <FormattedMessage id={ "wiki.zetter.recipes.title-palette" } defaultMessage="Palette" />
            </h2>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ null, null, null, PaintsItem, AnyPlanksItem, null, null, null, null ] } output={ PaletteItem } shapeless={ true } />
              <CraftGrid items={ [ null, null, null, PaletteItem, PaintsItem, null, null, null, null ] } output={ PaletteItem } shapeless={ true } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.palette" }
                                defaultMessage="Palette is necessary for drawing on a canvas. When placed in easel's UI special slot, the colors will appear. For your convenience when painting multi-canvas artwork you can use single palette on multiple easels and your colors will be saved with palette. Once palette bar is low, you won't be able to continue drawing. You can keep the colors and recharge it by combining with paintings as shown above."
                                description="Explain what is painting" />
            </p>
          </section>
          <section id="canvas" ref={ addSection(intl.formatMessage({
            id: "wiki.zetter.recipes.canvas.section",
            defaultMessage: 'Canvas'
          }), 'canvas') }>
            <h2 id="canvas">
              <FormattedMessage id={ "wiki.zetter.recipes.canvas.title" } defaultMessage="Canvas" />
            </h2>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ null, null, null, PaperItem, PaperItem, null, PaperItem, PaperItem, null ] } output={ CanvasItem } shapeless={ false } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.canvas" }
                                defaultMessage="Canvases are intermediate home for your artworks. They are visible when put on easel with right-click, but when it's done it's better to make a painting from canvases by using artist table. You'll see combined canvases preview there."
                                description="Explain what is painting" />
            </p>
          </section>
          <section id="artist-table" ref={ addSection(intl.formatMessage({
            id: "wiki.zetter.recipes.artist-table.section",
            defaultMessage: 'Artist Table'
          }), 'artist-table') }>
            <h2 id="artist-table">
              <FormattedMessage id={ "wiki.zetter.recipes.artist-table.title" } defaultMessage="Artist Table" />
            </h2>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ PlanksSlabItem, PlanksSlabItem, PlanksSlabItem, AnyPlanksItem, PaintsItem, AnyPlanksItem, AnyPlanksItem, PaperItem, AnyPlanksItem ] } output={ ArtistTableItem } shapeless={ false } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.artist-table" }
                                defaultMessage="Artist table allows you to make paintings from canvases by combining and signing them. In order to combine canvases, put them in rectangular shape in crafting grid. If the shape is correct, painting preview will be updated. If painting preview is not visible and output slot is empty, the shape is incorrect. Supported painting sizes listed below."
                                description="Explain what is artist table" />
            </p>
            <p>
              <table>
                <thead>
                <tr>
                  <td>-</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>-</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                </tr>
                </tbody>
              </table>
            </p>
          </section>
          <section id="painting" ref={ addSection(intl.formatMessage({
            id: "wiki.zetter.recipes.painting.section",
            defaultMessage: 'Painting'
          }), 'painting') }>
            <h2 id="painting">
              <FormattedMessage id={ "wiki.zetter.recipes.painting.title" } defaultMessage="Painting" />
            </h2>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.painting" }
                                defaultMessage="This is an actual painting. It's created only by signing one or multiple combined canvases on Artist Table."
                                description="Explain what is painting" />
            </p>
          </section>
          <section id="frames" ref={ addSection(intl.formatMessage({
            id: "wiki.zetter.recipes.frames.section",
            defaultMessage: 'Frames'
          }), 'frames') }>
            <h2 id="frames">Frames</h2>
            <h3>
              <FormattedMessage id={ "wiki.zetter.recipes.wooden-frames.title" } defaultMessage="Wooden Frames" />
            </h3>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ AnyPlanksItem, IronNuggetItem, AnyPlanksItem, StickItem, LeatherItem, StickItem, AnyPlanksItem, StickItem, AnyPlanksItem ] } output={ OakFrameItem } shapeless={ false } />
              <CraftGrid items={ [ DarkOakPlanksItem, GoldNuggetItem, DarkOakPlanksItem, StickItem, LeatherItem, StickItem, DarkOakPlanksItem, StickItem, DarkOakPlanksItem ] } output={ DarkOakPlatedFrameItem } shapeless={ false } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.wooden-frames" }
                                defaultMessage="Basic frames are made from wood, sticks, leather and nugget of your choice. You can use any vanilla type of wood, and you'll get different frames depending on what type of wood was used. If you use gold nugget in crafting, frame will additionally have a tiny golden plate, and the name of the painting will be shown when you right-click the painting."
                                description="Explain what is basic wooden frame" />
            </p>
            <h3>
              <FormattedMessage id={ "wiki.zetter.recipes.framing.title" } defaultMessage="Framing and Un-Framing Paintings" />
            </h3>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ null, null, null, WarpedPlatedFrameItem, PaintingItem, null, null, null, null ] } output={ WarpedPlatedFrameWithPaintingItem } shapeless={ true } />
              <CraftGrid items={ [ null, null, null, null, GoldPlatedFrameWithPaintingItem, null, null, null, null ] } output={ GoldPlatedFrameItem } shapeless={ true } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.framing" }
                                defaultMessage="In order to put painting in a frame, you need to combine them on crafting grid in any order. You can always get your painting back from the frame. To do that, just put framed painting on a crafting grid. You can take the frame back, and un-framed painting will appear in crafting grid."
                                description="Explain how to put painting in a frame" />
            </p>
          </section>
          <section id="special-frames" ref={ addSection(intl.formatMessage({
            id: "wiki.zetter.recipes.special-frames.section",
            defaultMessage: 'Special Frames'
          }), 'special-frames') }>
            <h2>
              <FormattedMessage id={ "wiki.zetter.recipes.special-frames.title" } defaultMessage="Special Frames" />
            </h2>
            <h3>
              <FormattedMessage id={ "wiki.zetter.recipes.iron-frame.title" } defaultMessage="Iron Frame" />
            </h3>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ IronNuggetItem, GlassPaneItem, IronNuggetItem, GlassPaneItem, LeatherItem, GlassPaneItem, IronNuggetItem, GlassPaneItem, IronNuggetItem ] } output={ IronFrameItem } shapeless={ false } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.iron-frame" }
                                defaultMessage="This frame doesn't have thick bezels around your painting, so you can put several of those one next to another o create a huge painting, more than 4x4 or just get rid of bezels. It's 1px thick, as vanilla painting is."
                                description="Explain what is iron frame" />
            </p>
            <h3>
              <FormattedMessage id={ "wiki.zetter.recipes.gold-frame.title" } defaultMessage="Golden Frame" />
            </h3>
            <div className={ styles['recipes-grid'] }>
              <CraftGrid items={ [ EmeraldItem, GoldIngotItem, EmeraldItem, GoldIngotItem, LeatherItem, GoldIngotItem, EmeraldItem, GoldIngotItem, EmeraldItem ] } output={ GoldPlatedFrameItem } shapeless={ false } />
              <CraftGrid items={ [ null, null, null, null, GoldPlatedFrameItem, null, null, GoldIngotItem, null ] } output={ GoldPlatedFrameItem } shapeless={ false } />
            </div>
            <p>
              <FormattedMessage id={ "wiki.zetter.recipes.golden-frame" }
                                defaultMessage="This is golden frame, which is much thicker than others and has a luxury look. It has inlaid emeralds which are required for crafting. Doesn't have a nameplate by default, see below;"
                                description="Explain what is golden frame" />
            </p>
          </section>
      </article>);
      } }
    </WikiLayout>
  </>);
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<IWikiPageProps>> => {
  return {
    props: {
      pages: [
        { title: 'wiki.zetter.page', path: '/wiki/zetter' },
        { title: 'wiki.zetter.recipes.page', path: '/wiki/zetter/recipes' }
      ]
    }
  }
}
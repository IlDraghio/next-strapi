import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    descritpion: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    IsExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Features: Schema.Attribute.Component<'components.features', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'components.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.features': ComponentsFeatures;
      'components.link': ComponentsLink;
      'layout.features-section': LayoutFeaturesSection;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}

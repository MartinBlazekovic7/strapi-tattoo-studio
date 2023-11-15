import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksFormContainer extends Schema.Component {
  collectionName: 'components_elements_form_containers';
  info: {
    displayName: 'FormContainer';
    description: '';
  };
  attributes: {
    Form: Attribute.Boolean;
  };
}

export interface BlocksImageTextVertical extends Schema.Component {
  collectionName: 'components_blocks_image_text_verticals';
  info: {
    displayName: 'Image text vertical';
    icon: 'dashboard';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface BlocksImageText extends Schema.Component {
  collectionName: 'components_blocks_image_texts';
  info: {
    displayName: 'Image text';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'elements.button'>;
    image: Attribute.Media;
    imageLeft: Attribute.Boolean;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.form-container': BlocksFormContainer;
      'blocks.image-text-vertical': BlocksImageTextVertical;
      'blocks.image-text': BlocksImageText;
      'elements.button': ElementsButton;
    }
  }
}

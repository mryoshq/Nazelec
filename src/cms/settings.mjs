import { t } from "@util/translate";
import { buttons, style } from "./common.mjs";

export const settings = {
  name: "config",
  identifier_field: "name",
  label: t("settings"),
  extension: "mdx",
  format: "frontmatter",
  icon: "settings",
  editor: {
    preview: false,
    frame: false,
  },
  files: [
    {
      name: "about",
      label: t("about"),
      file: "src/content/config/about.mdx",

      fields: [
        { name: "sitename", label: t("site_name"), widget: "string" },
        { name: "intro", label: t("intro"), widget: "markdown" },
        { name: "footer_text", label: t("footer_text"), widget: "markdown" },

        {
          name: "newsletter_text",
          label: t("newsletter_text"),
          widget: "markdown",
          required: false,
        },
        {
          name: "team",
          label: t("team"),
          widget: "list",
          collapsed: true,
          fields: [
            { name: "name", label: t("name"), widget: "string" },
            { name: "position", label: t("position"), widget: "string" },
            { name: "thumbnail", label: t("photo"), widget: "image" },
          ],
        },
      ],
    },

    {
      name: "blog",
      label: t("blog_settings"),
      file: "src/content/config/blog.mdx",

      fields: [
        { name: "title", label: t("title"), widget: "string" },
        { name: "description", label: t("description_seo"), widget: "text" },
        { name: "intro", label: t("intro"), widget: "markdown" },
        {
          name: "per_page",
          label: t("items_per_page"),
          widget: "number",
          default: 10,
          value_type: "int",
          min: 2,
          max: 100,
          step: 1,
        },
        {
          name: "hero_buttons",
          label: t("hero_buttons"),
          label_singular: "Button",
          widget: "list",
          collapsed: true,
          summary: "{{fields.label}} | {{fields.href}}",
          fields: buttons.fields,
          required: false,
        },

        {
          name: "blog_tags",
          label: t("tags"),
          widget: "list",
          required: false,
          collapsed: true,
          fields: [
            { name: "name", label: t("name"), widget: "string" },
            { name: "title", label: t("title"), widget: "string" },
            {
              name: "description",
              label: t("description_seo"),
              widget: "text",
            },
            {
              name: "intro",
              label: t("hero_intro"),
              widget: "text",
              required: false,
            },
            {
              name: "body",
              label: t("body"),
              widget: "markdown",
              required: false,
              show_raw: true,
            },
            {
              name: "hero_buttons",
              label: t("hero_buttons"),
              label_singular: "Button",
              widget: "list",
              collapsed: true,
              summary: "{{fields.label}} | {{fields.href}}",
              fields: buttons.fields,
              required: false,
            },
            { name: "thumbnail", label: t("image"), widget: "image" },
          ],
        },
        style,

        { name: "thumbnail", label: t("image"), widget: "image" },
        {
          label: t("og_image"),
          name: "og_image",
          widget: "image",
          required: false,
          hint: t("label_og_image"),
        },
      ],
    },
    {
      name: "project",
      label: t("portfolio_settings"),
      file: "src/content/config/project.mdx",

      fields: [
        { name: "title", label: t("title"), widget: "string" },
        { name: "description", label: t("description_se"), widget: "text" },
        { name: "intro", label: t("intro"), widget: "markdown" },

        {
          name: "per_page",
          label: t("items_per_page"),
          widget: "number",
          default: 10,
          value_type: "int",
          min: 2,
          max: 100,
          step: 1,
        },
        {
          name: "hero_buttons",
          label: t("hero_buttons"),
          label_singular: "Button",
          widget: "list",
          collapsed: true,
          summary: "{{fields.label}} | {{fields.href}}",
          fields: buttons.fields,
          required: false,
        },

        {
          name: "project_tags",
          label: t("tags"),
          widget: "list",
          required: false,
          collapsed: true,
          fields: [
            { name: "name", label: t("name"), widget: "string" },
            { name: "title", label: t("title"), widget: "string" },
            {
              name: "description",
              label: t("description_seo"),
              widget: "text",
            },
            {
              name: "intro",
              label: t("hero_intro"),
              widget: "text",
              required: false,
            },
            {
              name: "body",
              label: t("body"),
              widget: "markdown",
              required: false,
              show_raw: true,
            },
            {
              name: "hero_buttons",
              label: t("hero_buttons"),
              label_singular: "Button",
              widget: "list",
              collapsed: true,
              summary: "{{fields.label}} | {{fields.href}}",
              fields: buttons.fields,
              required: false,
            },
            { name: "thumbnail", label: t("image"), widget: "image" },
            {
              label: t("og_image"),
              name: "og_image",
              widget: "image",
              required: false,
              hint: t("label_og_image"),
            },
          ],
        },
        style,

        { name: "thumbnail", label: t("image"), widget: "image" },
        {
          label: t("og_image"),
          name: "og_image",
          widget: "image",
          required: false,
          hint: t("label_og_image"),
        },
      ],
    },
 
    {
      name: "navigation",
      label: t("navigation"),
      file: "src/content/config/navigation.mdx",
      fields: [
        {
          name: "main_menu",
          label: t("main_menu"),
          widget: "list",
          collapsed: true,
          fields: [
            { name: "label", label: t("label"), widget: "string" },
            { name: "href", label: t("href"), widget: "string" },
          ],
        },

        {
          name: "footer_menus",
          label: t("footer_menus"),
          widget: "list",
          collapsed: true,
          reuired: false,
          fields: [
            { name: "label", label: t("label"), widget: "string" },
            {
              name: "links",
              label: t("links"),
              widget: "list",
              collapsed: true,
              fields: [
                { name: "label", label: t("label"), widget: "string" },
                { name: "href", label: t("href"), widget: "string" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "contact",
      label: t("contact_social"),

      file: "src/content/config/contact.mdx",

      fields: [
        { name: "email", label: t("email"), widget: "string", required: true },
        {
          name: "phone_label",
          label: "Phone Label",
          widget: "string",
          required: false,
        },
        {
          name: "phone_link",
          label: t("phone_link"),
          widget: "string",
          required: false,
          default: "tel:+316000000",
        },
        {
          name: "social",
          label: t("socials"),
          widget: "list",
          required: false,
          collapsed: true,

          summary: "{{fields.label}} | {{fields.href}}",
          fields: [
            { name: "label", label: t("label"), widget: "string" },
            { name: "href", label: t("href"), widget: "string" },
            {
              name: "icon",
              label: t("icon"),
              widget: "relation",
              collection: "config",
              required: false,
              file: "style",
              search_fields: ["icons.*.name"],
              display_fields: ["icons.*.name"],
              options_length: 50,
              value_field: "icons.*.icon",
            },
          ],
        },
      ],
    },
  
  ],
};

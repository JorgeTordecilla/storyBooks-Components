import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Mylabel } from "../../components/Mylabel";

export default {
  title: "UI/MyLabel",
  component: Mylabel,
  argTypes: {
    color: { control: "select" },
    size: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof Mylabel>;
const Template: ComponentStory<typeof Mylabel> = (args) => (
  <Mylabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
  size: "normal",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  allCaps: true,
  label: "Basic",
  size: "h3",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Basic",
  size: "h2",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: "tertiary",
  label: "Basic",
  size: "h1",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  fontColor: "firebrick",
  size: "h1",
};

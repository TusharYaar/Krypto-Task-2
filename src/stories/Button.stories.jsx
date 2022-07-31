import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (<Button {...args}>Hello</Button>);

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Error = Template.bind({});


Primary.args = {
    variant: "primary"
};
 Secondary.args = {
    variant: "secondary"

};
Success.args = {
    variant: "success"

};
Error.args = {
    variant: "error"

};
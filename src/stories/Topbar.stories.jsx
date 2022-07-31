import Topbar from '../components/Topbar';

export default {
  title: 'Topbar',
  component: Topbar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (<Topbar {...args} />);

export const Default = Template.bind({});

Default.args = {
    lastPrice: 32563, change:0.45, low: 4335252, high: 234234
}

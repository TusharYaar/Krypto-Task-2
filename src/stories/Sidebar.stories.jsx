import Sidebar from '../components/Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (<Sidebar {...args} />);

export const Default = Template.bind({});
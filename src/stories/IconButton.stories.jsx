import IconButton from '../components/IconButton';
import { BsFillAlarmFill } from "react-icons/bs";
export default {
  title: 'IconButton',
  component: IconButton,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (<IconButton {...args} />);

export const Default = Template.bind({});

Default.args = {
    icon: <BsFillAlarmFill />,
    active: false
}

import { RevenuCard } from '../../component/RevenueCard';
import { Button } from './Button';

export default {
  component: RevenuCard,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => <RevenuCard primary label="Button" />,
};
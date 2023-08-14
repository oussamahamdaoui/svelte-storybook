<script lang="ts">
	import { Meta, Story } from './utils.ts';
	import { VtmnButtonVariant, Icon, VtmnButtonSize } from '../vtmn.enums.ts';
	import Button from '../lib/Components/SomeComponent.svelte';
	import { withActions } from '@storybook/addon-actions/decorator';

	const argTypes = {
		variant: {
			control: { type: 'select' },
			options: VtmnButtonVariant
		},
		size: {
			control: { type: 'radio' },
			options: VtmnButtonSize
		},
		iconLeft: {
			control: { type: 'select' },
			options: Icon
		},
		iconRight: {
			control: { type: 'select' },
			options: Icon
		}
	};

	const parameters = {
		controls: {

		}
	};
</script>

<Meta title="Labels" component={Button} {argTypes} decorators={[withActions]} />

<Story name="Button" let:args {parameters}>
	<Button {...args}>Some slot</Button>
</Story>

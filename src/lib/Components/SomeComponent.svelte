<script lang="ts">
    import { VtmnButton  } from '@vtmn/svelte';
	import { dir } from './Store.ts';
	import type { ComponentProps } from 'svelte';
    export let variant: ComponentProps<VtmnButton>['variant'] = 'primary';
    export let size: ComponentProps<VtmnButton>['size'] = 'medium';
    export let iconLeft:ComponentProps<VtmnButton>['iconLeft'] = undefined;
    export let iconRight:ComponentProps<VtmnButton>['iconRight'] = undefined;

</script>

<VtmnButton {variant} {size} {iconLeft} {iconRight} on:click><slot></slot></VtmnButton>

<style>
    @import "@vtmn/icons/dist/vitamix/font/vitamix.css";
</style>


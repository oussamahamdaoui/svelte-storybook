declare type Icon = import('./vtmn.enums.ts').Icon;
declare type VtmnButtonVariant = import('./vtmn.enums.ts').VtmnButtonVariant;
declare type VtmnButtonSize = import('./vtmn.enums.ts').VtmnButtonSize;
declare type AttributeRole = import('./vtmn.enums.ts').AttributeRole;
declare type VtmnLinkSize = import('./vtmn.enums.ts').VtmnLinkSize;
declare type VtmnLoaderSize = import('./vtmn.enums.ts').VtmnLoaderSize;
declare type VtmnBagdeVariant = import('./vtmn.enums.ts').VtmnBagdeVariant;
declare type VtmnPriceSize = import('./vtmn.enums.ts').VtmnPriceSize;
declare type VtmnPriceVariant = import('./vtmn.enums.ts').VtmnPriceVariant;
declare type VtmnProgressbarVariant = import('./vtmn.enums.ts').VtmnProgressbarVariant;
declare type VtmnProgressbarSize = import('./vtmn.enums.ts').VtmnProgressbarSize;
declare type VtmnRatingSize = import('./vtmn.enums.ts').VtmnRatingSize;




  

declare module '@vtmn/svelte' {
    import type { SvelteComponentTyped } from "svelte";

    

    type VtmnButtonProps = {
        variant?: VtmnButtonVariant,
        size?: VtmnButtonSize
        iconLeft?: Icon,
        iconRight?: Icon,
        iconAlone?: Icon,
        class?: string,
    };
    type VtmnButtonSlots = {
        default:EmptyObject
    };
    type VtmnButtonEvents = {
        click: (e: MouseEvent) => void,
        keydown: (e: KeyboardEvent) => void,
    };

    type EmptyObject = Record<string, never>;

    type VtmnDropdownProps = {
        id: string,
        label?: string,
        summary: string,
        disabled?: boolean,
        class?: string,
    };
    type VtmnDropdownEvents = EmptyObject;

    type VtmnLinkProps = {
        href: string,
        size?: VtmnLinkSize,
        standalone?: boolean,
        reversed?: boolean,
        iconAlong?: boolean,
        class?: string,
    };
    type VtmnLinkEvents = {
        click: (e: MouseEvent) => void,
    };

    type VtmnSelectProps = {
        id: string,
        name: string,
        label: string,
        value: object,
        disabled?: boolean,
        error?: string,
        border?: boolean,
        class?: string,
    };
    type VtmnSelectEvents = {
        change: (e: Event) => void,
    };

    type VtmnTextInputProps = {
        id: string,
        value: string,
        labelText?: string,
        placeholder?: string,
        helperText?: string,
        disabled?: boolean,
        multiline?: boolean,
        valid?: boolean,
        error?: boolean,
        class?: string,
    };
    type VtmnTextInputEvents = {
        input: (e: InputEvent) => void,
        change: (e: Event) => void,
        blur: (e: FocusEvent) => void,
        focus: (e: FocusEvent) => void,
    };

    type VtmnBadgeProps = {
        value?: number,
        variant?: VtmnBagdeVariant,
        class?: string,
    };
    type VtmnBadgeEvents = EmptyObject;

    type VtmnLoaderProps = {
        size?: VtmnLoaderSize,
        class?: string,

    };
    type VtmnLoaderEvents = EmptyObject;

    type VtmnPriceProps = {
        size?: VtmnPriceSize,
        variant?: VtmnPriceVariant,
        noPadding?: boolean,
        class?: string,
    };
    type VtmnPriceEvents = EmptyObject;

    type VtmnProgressbarProps = {
        variant: VtmnProgressbarVariant,
        size?: VtmnProgressbarSize,
        label: string | boolean,
        progress?: number,
        indeterminate?: boolean,
        track?: boolean,
        img?: string,
        imgAlt?: string,
        labelId?: string,
    };
    type VtmnProgressbarEvents = EmptyObject;
    type VtmnRatingProps = {
        name: string,
        size?: VtmnRatingSize,
        disabled?: boolean,
        readonly?: boolean,
        value?: number,
        class?: string,
    };
    type VtmnRatingEvents = EmptyObject;

    type VtmnTagProps = {
        varient?: 'accent' | 'alert' | 'brand' | 'decorative_gravel' | 'decorative_brick' | 'decorative_saffron' | 'decorative_gold' | 'decorative_jade' | 'decorative_emerald' | 'decorative_cobalt' | 'decorative_amethyst',
        size?: "small" | "medium",
        icon?: Icon,
        href?: string,
        class?: string,
    };
    type VtmnTagEvents = EmptyObject;

    type VtmnBreadcrumbProps = {
        className?: string,
    };
    type VtmnBreadcrumbEvents = EmptyObject;

    type VtmnNavbarProps = {
        class?: string,
    };
    type VtmnNavbarEvents = EmptyObject;
    type VtmnNavbarSlots = {
        "left-nav": EmptyObject;
        "logo": EmptyObject;
        'middle-area': EmptyObject;
        'right-nav': EmptyObject;
    }

    type VtmnNavbarLinkProps = {
        icon?: Icon,
        class?: string,
    };
    type VtmnNavbarLinkEvents = {
        click: (e: MouseEvent) => void,
        mouseover: (e: MouseEvent) => void,
        mouseenter: (e: MouseEvent) => void,
        mouseout: (e: MouseEvent) => void,
        focus: (e: FocusEvent) => void,
        blur: (e: FocusEvent) => void,
        keydown: (e: KeyboardEvent) => void,
    };
    type VtmnNavbarLinkSlots = {
        "badge": EmptyObject;
        "default": EmptyObject;
    };

    type VtmnSearchProps = {
        variant?: 'default' | 'persistent' | 'on-content',
        disabled?: boolean,
        showSearchButton?: boolean,
        size: "small" | "medium"
        value?: string,
        inputRef: HTMLInputElement,
        ariaLabels: {
            clearButton: string,
            searchButton: string,
        },
        class?: string,
        placeholder?: string,
    };
    type VtmnSearchEvents = {
        search: (e: { text: string }) => void,
        click: (e: MouseEvent) => void,
        input: (e: InputEvent) => void,
        mouseover: (e: MouseEvent) => void,
        mouseenter: (e: MouseEvent) => void,
        mouseout: (e: MouseEvent) => void,
        focus: (e: FocusEvent) => void,
        blur: (e: FocusEvent) => void,
        keydown: (e: KeyboardEvent) => void,
        keypress: (e: KeyboardEvent) => void,
        keyup: (e: KeyboardEvent) => void,
    };

    type VtmnTabsProps = {
        align?: 'start' | 'center' | 'end',
        size?: 'small' | 'medium',
        className?: string
    };
    type VtmnTabsEvents = EmptyObject;

    type VtmnAlertProps = {
        title: string,
        description: string,
        withCloseButton: boolean,
        variant?: "info" | "success" | "warning" | "danger"
    };
    type VtmnAlertEvents = EmptyObject;

    type VtmnModalProps = {
        open: boolean,
        id: string,
        class?: string,
        'aria-labelledby'?: string
        'aria-describedby'?: string
    };
    type VtmnModalEvents = {
        close: (open: boolean) => void,
        keydown: (e: KeyboardEvent) => void,
        keyup: (e: KeyboardEvent) => void,
        keypress: (e: KeyboardEvent) => void,
    };
    type VtmnModalSlots = {
        title: EmptyObject
        description: EmptyObject
        actions: EmptyObject
    };

    type VtmnPopoverProps = {
        id: string,
        position: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
        class?: string,
        'aria-labelledby'?: string
        'aria-describedby'?: string
    };
    type VtmnPopoverEvents = EmptyObject;
    type VtmnPopoverSlots = {
        title: EmptyObject
        body: EmptyObject
        default: EmptyObject
    };
    type VtmnSnackbarProps = {
        content: string,
        withCloseButton?: boolean,
        action?: {
            label: string,
            execute: () => void,
        }
    };
    type VtmnSnackbarSlots = EmptyObject;
    type VtmnSnackbarEvents = EmptyObject;

    type VtmnToastProps = {
        content: string,
        withCloseButton?: boolean,
        withIcon?: boolean,
    };
    type VtmnToastSlots = EmptyObject;
    type VtmnToastEvents = EmptyObject;

    type VtmnTooltipProps = {
        tooltip: string,
        position: 'bottom-left' | 'bottom' | 'bottom-right' | 'left' | 'right' | 'top-left' | 'top' | 'top-right',
    };
    type VtmnTooltipSlots = {
        default: EmptyObject;
    };
    type VtmnTooltipEvents = EmptyObject;

    type VtmnCheckboxProps = {
        id: string,
        checked: boolean,
        disabled?: boolean,
        class?: string,
    };
    type VtmnCheckboxSlots = {
        default: EmptyObject;
    };
    type VtmnCheckboxEvents = EmptyObject;

    type VtmnChipProps = {
        id: string,
        variant?: "single-choice" | "input" | "filter" | "action",
        size?: "medium" | "small",
        disabled?: boolean,
        selected?: boolean,
        icon?: Icon,
        badgeValue?: number
        class?: string,
    };
    type VtmnChipSlots = {
        default: EmptyObject;
    }
    type VtmnChipEvents = {
        cancel: () => void,
        click: (e: MouseEvent) => void,
        keydown: (e: KeyboardEvent) => void,
        keyup: (e: KeyboardEvent) => void,
        keypress: (e: KeyboardEvent) => void,
    };

    type VtmnQuantityProps = {
        id: string,
        value: number
        label?: string,
        disabled?: boolean,
        fullWidth?: boolean,
        error?: string,
        min?: number,
        max?: number,
        step?: number,
        size?: "medium" | "small",
        class?: string,
    };
    type VtmnQuantitySlots = EmptyObject;
    type VtmnQuantityEvents = {
        subtract: (value: number) => void,
        change: (e: { value: number, action: 'add' | 'subtract' }) => void,
        add: (value: number) => void,
    };


    type VtmnAccordionProps = {
        summary: string,
        withIconLeft?: boolean,
        disabled?: boolean,
        open?: boolean,
        class?: string,
    };
    type VtmnAccordionSlots = {
        default: EmptyObject,
        summaryComponent: EmptyObject,
    };
    type VtmnAccordionEvents = EmptyObject;

    type VtmnRadioButtonProps = {
        id: string,
        name: string,
        value: string,
        group: string,
        disabled?: boolean,
    };
    type VtmnRadioButtonSlots = {
        default: EmptyObject
    };
    type VtmnRadioButtonEvents = EmptyObject;

    type VtmnToggleButtonProps = {
        id: string,
        checked?: boolean,
        disabled?: boolean,
        size?: "small" | "medium",
        class?: string,
    };
    type VtmnToggleButtonSlots = {
        default: EmptyObject
    };
    type VtmnToggleButtonEvents = EmptyObject;

    type VtmnListItemProps = {
        size?: 'small' | 'medium',
        divider?: boolean,
        role?: AttributeRole,
        disabled?: boolean,
        href?: string,
        class?: string,
    };
    type VtmnListItemSlots = {
        'start-visual': EmptyObject,
        'text': EmptyObject,
        'subtext': EmptyObject,
        'end-action': EmptyObject,
    };
    type VtmnListItemEvents = {
        click: (e: MouseEvent) => void
    };

    type VtmnCardProps = {
        title: string,
        variant?: 'top-image' | 'side-image' | 'full-image',
        fullImage?: boolean,
        contentOpaque?: boolean,
        headingLevel: 1 | 2 | 3 | 4 | 5 | 6,
        class?: string,
    };
    type VtmnCardSlots = {
        img: EmptyObject,
        content: EmptyObject,
        actions: EmptyObject,
    };
    type VtmnCardEvents = EmptyObject;

    type VtmnDividerProps = {
        orientation?: 'vertical' | 'horizontal',
        variant?: 'top-image' | 'side-image' | 'full-image',
        textPosition?: "start" | "center" | "end",
        labelId?: string,
        class?: string,
    };
    type VtmnDividerSlots = {
        default: EmptyObject,
    };
    type VtmnDividerEvents = EmptyObject;

    type VtmnListProps = {
        class?: string,
    };
    type VtmnListSlots = {
        default: EmptyObject,
    };
    type VtmnListEvents = EmptyObject;

    type VtmnSkeletonProps = {
        width: string,
        height?: string,
        shape?: "line" | "avatar",
        class?: string,
    };

    type VtmnSkeletonSlots = {
        'start-visual': EmptyObject,
        'text': EmptyObject,
        'subtext': EmptyObject,
        'end-action': EmptyObject,
    };
    type VtmnSkeletonEvents = {
        click: (e: MouseEvent) => void
    };

    type VtmnBreadcrumbItemProps = {
        icon?: Icon,
        href?: string,
    };

    type VtmnBreadcrumbItemSlots = {
        default: EmptyObject,
    };
    type VtmnBreadcrumbItemEvents = EmptyObject;

    type VtmnDropdownItemProps = {
        id: string,
        value: object,
        group: object[],
        selected?: boolean,
        divider?: boolean,
        icon?: Icon,
        class?: string,
    };

    type VtmnDropdownItemSlots = {
        default: EmptyObject,
    };
    type VtmnDropdownItemEvents = {
        change: (e: Event) => void
    };

    type VtmnTabsItemItemProps = {
        badgeValue?: number,
        selected?: boolean,
        icon?: Icon,
        class?: string,
    };
    type VtmnTabsItemItemSlots = {
        default: EmptyObject,
    };
    type VtmnTabsItemItemEvents = {
        click: (e: MouseEvent) => void,
        mouseover: (e: MouseEvent) => void,
        mouseenter: (e: MouseEvent) => void,
        mouseout: (e: MouseEvent) => void,
        focus: (e: FocusEvent) => void,
        blur: (e: FocusEvent) => void,
        keydown: (e: KeyboardEvent) => void,
    };

    class VtmnAlertStore {
        send: (props: VtmnAlertProps & Record<string, object>) => void
        close: (id: string) => void
        subscribe: (run: (...args) => void) => void
    }

    class VtmnSnackbarStore {
        send: (props: VtmnSnackbarProps) => void
        close: () => void
        subscribe: (run: (...args) => void) => void
    }

    class VtmnToastStore {
        send: (props: VtmnToastProps) => void
        close: (id: string) => void
        subscribe: (run: (...args) => void) => void
    }


    declare class VtmnButton extends SvelteComponentTyped<VtmnButtonProps, VtmnButtonEvents, VtmnButtonSlots> { }
    declare class VtmnDropdown extends SvelteComponentTyped<VtmnDropdownProps, VtmnDropdownEvents> { }
    declare class VtmnLink extends SvelteComponentTyped<VtmnLinkProps, VtmnLinkEvents> { }
    declare class VtmnSelect extends SvelteComponentTyped<VtmnSelectProps, VtmnSelectEvents> { }
    declare class VtmnTextInput extends SvelteComponentTyped<VtmnTextInputProps, VtmnTextInputEvents> { }
    declare class VtmnBadge extends SvelteComponentTyped<VtmnBadgeProps, VtmnBadgeEvents> { }
    declare class VtmnLoader extends SvelteComponentTyped<VtmnLoaderProps, VtmnLoaderEvents> { }
    declare class VtmnPrice extends SvelteComponentTyped<VtmnPriceProps, VtmnPriceEvents> { }
    declare class VtmnProgressbar extends SvelteComponentTyped<VtmnProgressbarProps, VtmnProgressbarEvents> { }
    declare class VtmnRating extends SvelteComponentTyped<VtmnRatingProps, VtmnRatingEvents> { }
    declare class VtmnTag extends SvelteComponentTyped<VtmnTagProps, VtmnTagEvents> { }
    declare class VtmnBreadcrumb extends SvelteComponentTyped<VtmnBreadcrumbProps, VtmnBreadcrumbEvents> { }
    declare class VtmnNavbar extends SvelteComponentTyped<VtmnNavbarProps, VtmnNavbarEvents, VtmnNavbarSlots> { }
    declare class VtmnNavbarLink extends SvelteComponentTyped<VtmnNavbarLinkProps, VtmnNavbarLinkEvents, VtmnNavbarLinkSlots> { }
    declare class VtmnSearch extends SvelteComponentTyped<VtmnSearchProps, VtmnSearchEvents> { }
    declare class VtmnTabs extends SvelteComponentTyped<VtmnTabsProps, VtmnTabsEvents, { default: EmptyObject }> { }
    declare class VtmnAlert extends SvelteComponentTyped<EmptyObject, VtmnAlertEvents, { default: EmptyObject }> { }
    declare class VtmnModal extends SvelteComponentTyped<VtmnModalProps, VtmnModalEvents, VtmnModalSlots> { }
    declare class VtmnPopover extends SvelteComponentTyped<VtmnPopoverProps, VtmnPopoverEvents, VtmnPopoverSlots> { }
    declare class VtmnSnackbar extends SvelteComponentTyped<EmptyObject, VtmnSnackbarEvents, VtmnSnackbarSlots> { }
    declare class VtmnToast extends SvelteComponentTyped<EmptyObject, VtmnToastEvents, VtmnToastSlots> { }
    declare class VtmnTooltip extends SvelteComponentTyped<VtmnTooltipProps, VtmnTooltipEvents, VtmnTooltipSlots> { }
    declare class VtmnCheckbox extends SvelteComponentTyped<VtmnCheckboxProps, VtmnCheckboxEvents, VtmnCheckboxSlots> { }
    declare class VtmnChip extends SvelteComponentTyped<VtmnChipProps, VtmnChipEvents, VtmnChipSlots> { }
    declare class VtmnQuantity extends SvelteComponentTyped<VtmnQuantityProps, VtmnQuantityEvents, VtmnQuantitySlots> { }
    declare class VtmnRadioButton extends SvelteComponentTyped<VtmnRadioButtonProps, VtmnRadioButtonEvents, VtmnRadioButtonSlots> { }
    declare class VtmnToggleButton extends SvelteComponentTyped<VtmnToggleButtonProps, VtmnToggleButtonEvents, VtmnToggleButtonSlots> { }
    declare class VtmnAccordion extends SvelteComponentTyped<VtmnAccordionProps, VtmnAccordionEvents, VtmnAccordionSlots> { }
    declare class VtmnCard extends SvelteComponentTyped<VtmnCardProps, VtmnCardEvents, VtmnCardSlots> { }
    declare class VtmnDivider extends SvelteComponentTyped<VtmnDividerProps, VtmnDividerEvents, VtmnDividerSlots> { }
    declare class VtmnList extends SvelteComponentTyped<VtmnListProps, VtmnListEvents, VtmnListSlots> { }
    declare class VtmnListItem extends SvelteComponentTyped<VtmnListItemProps, VtmnListItemEvents, VtmnListItemSlots> { }
    declare class VtmnSkeleton extends SvelteComponentTyped<VtmnSkeletonProps, VtmnSkeletonEvents, VtmnSkeletonSlots> { }
    declare class VtmnBreadcrumbItem extends SvelteComponentTyped<VtmnBreadcrumbItemProps, VtmnBreadcrumbItemEvents, VtmnBreadcrumbItemSlots> { }
    declare class VtmnTabsItemItem extends SvelteComponentTyped<VtmnTabsItemItemProps, VtmnTabsItemItemEvents, VtmnTabsItemItemSlots> { }
    declare class VtmnDropdownItem extends SvelteComponentTyped<VtmnDropdownItemProps, VtmnDropdownItemEvents, VtmnDropdownItemSlots> { }
    declare const vtmnAlertStore: VtmnAlertStore;
    declare const vtmnSnackbarStore: VtmnSnackbarStore;
    declare const vtmnToastStore: VtmnToastStore;

    export {
        VtmnButton,
        VtmnDropdown,
        VtmnLink,
        VtmnSelect,
        VtmnTextInput,
        VtmnBadge,
        VtmnLoader,
        VtmnPrice,
        VtmnProgressbar,
        VtmnRating,
        VtmnTag,
        VtmnBreadcrumb,
        VtmnNavbar,
        VtmnNavbarLink,
        VtmnSearch,
        VtmnTabs,
        VtmnAlert,
        VtmnModal,
        VtmnPopover,
        VtmnSnackbar,
        VtmnToast,
        VtmnTooltip,
        VtmnCheckbox,
        VtmnChip,
        VtmnQuantity,
        VtmnRadioButton,
        VtmnToggleButton,
        VtmnAccordion,
        VtmnCard,
        VtmnDivider,
        VtmnList,
        VtmnListItem,
        VtmnSkeleton,
        VtmnBreadcrumbItem,
        VtmnTabsItemItem,
        VtmnDropdownItem,
        vtmnAlertStore,
        vtmnSnackbarStore,
        vtmnAlertStore,
    }
}
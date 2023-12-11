export interface LayoutI{
    children: JSX.Element | JSX.Element[];
}
export interface SidebarI {
    className: string
}

export interface TitlePageI {
    titlePage: string
    renderX?: boolean
    onlyTitle?: boolean
    extraActionForBackButton?: () => void
    renderBackInDesk?: boolean
}
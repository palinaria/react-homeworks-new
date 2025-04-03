import styles from "./styles";


export const Tooltip = ({text,children,component:Component='span'}) => (
    <Component className={styles.tooltip}>
        {children}
        <span className={styles.tooltipText}>{text}</span>
    </Component>
)


<Tooltip text="some tooltip" component ="div">

    .tooltip{
    position:relative;
    cursor:pointer;
    .TooltipText {
        position: absolute;
        top:0;
        right:0;
        padding:0.5em 1em;
        border-radius:2em;
        display:none
    }
}

&:HHOVER .tooltipText{

}
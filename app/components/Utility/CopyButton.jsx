import * as React from "react"; import * as PropTypes from "prop-types"; 
import counterpart from "counterpart";
import ClipboardButton from "react-clipboard.js";
import Icon from "../Icon/Icon";

const CopyButton = ({
    className = "button",
    text = "",
    tip = "tooltip.copy_tip",
    dataPlace = "right",
    buttonIcon = "clippy",
    buttonText = ""
}) => {
    return (
        <ClipboardButton
            data-clipboard-text={text}
            className={className}
            data-place={dataPlace}
            data-tip={counterpart.translate(tip)}
        >
            {!buttonText ? <Icon name={buttonIcon} /> : buttonText}
        </ClipboardButton>
    );
};

export default CopyButton;

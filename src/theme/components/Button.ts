import { StyleConfig } from "@chakra-ui/react";

export const Button: StyleConfig = {
    variants: {
        "simplefi-highlighted": (props) => {
            return {
                bg: props.colorMode === "dark" ? `${props.colorScheme || "sip-purple"}.900` : "sip-purple.900",
                color: `${props.colorScheme || "sip-purple"}.font_dark`,

                _hover: {
                    _dark: {
                        bg: `${props.colorScheme || "sip-purple"}.100`,
                        color: `${props.colorScheme || "sip-purple"}.font_light`
                    },
                },
            }
        }
    }
};
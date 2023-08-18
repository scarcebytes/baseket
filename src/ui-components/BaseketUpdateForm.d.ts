/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Baseket, Post, Human as Human0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BaseketUpdateFormInputValues = {
    type?: string;
    description?: string;
    tokenAddress?: string;
    tokenId?: string;
    rootBaseket?: boolean;
    posts?: Post[];
    Human?: Human0[];
};
export declare type BaseketUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    tokenAddress?: ValidationFunction<string>;
    tokenId?: ValidationFunction<string>;
    rootBaseket?: ValidationFunction<boolean>;
    posts?: ValidationFunction<Post>;
    Human?: ValidationFunction<Human0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BaseketUpdateFormOverridesProps = {
    BaseketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tokenAddress?: PrimitiveOverrideProps<TextFieldProps>;
    tokenId?: PrimitiveOverrideProps<TextFieldProps>;
    rootBaseket?: PrimitiveOverrideProps<SwitchFieldProps>;
    posts?: PrimitiveOverrideProps<AutocompleteProps>;
    Human?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BaseketUpdateFormProps = React.PropsWithChildren<{
    overrides?: BaseketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    baseket?: Baseket;
    onSubmit?: (fields: BaseketUpdateFormInputValues) => BaseketUpdateFormInputValues;
    onSuccess?: (fields: BaseketUpdateFormInputValues) => void;
    onError?: (fields: BaseketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BaseketUpdateFormInputValues) => BaseketUpdateFormInputValues;
    onValidate?: BaseketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BaseketUpdateForm(props: BaseketUpdateFormProps): React.ReactElement;

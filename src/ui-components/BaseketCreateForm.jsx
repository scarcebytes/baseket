/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import {
  Baseket,
  Post,
  Human as Human0,
  BaseketPost,
  BaseketHuman,
} from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BaseketCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    description: "",
    tokenAddress: "",
    tokenId: "",
    rootBaseket: false,
    posts: [],
    Human: [],
  };
  const [type, setType] = React.useState(initialValues.type);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [tokenAddress, setTokenAddress] = React.useState(
    initialValues.tokenAddress
  );
  const [tokenId, setTokenId] = React.useState(initialValues.tokenId);
  const [rootBaseket, setRootBaseket] = React.useState(
    initialValues.rootBaseket
  );
  const [posts, setPosts] = React.useState(initialValues.posts);
  const [Human, setHuman] = React.useState(initialValues.Human);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setDescription(initialValues.description);
    setTokenAddress(initialValues.tokenAddress);
    setTokenId(initialValues.tokenId);
    setRootBaseket(initialValues.rootBaseket);
    setPosts(initialValues.posts);
    setCurrentPostsValue(undefined);
    setCurrentPostsDisplayValue("");
    setHuman(initialValues.Human);
    setCurrentHumanValue(undefined);
    setCurrentHumanDisplayValue("");
    setErrors({});
  };
  const [currentPostsDisplayValue, setCurrentPostsDisplayValue] =
    React.useState("");
  const [currentPostsValue, setCurrentPostsValue] = React.useState(undefined);
  const postsRef = React.createRef();
  const [currentHumanDisplayValue, setCurrentHumanDisplayValue] =
    React.useState("");
  const [currentHumanValue, setCurrentHumanValue] = React.useState(undefined);
  const HumanRef = React.createRef();
  const getIDValue = {
    posts: (r) => JSON.stringify({ id: r?.id }),
    Human: (r) => JSON.stringify({ id: r?.id }),
  };
  const postsIdSet = new Set(
    Array.isArray(posts)
      ? posts.map((r) => getIDValue.posts?.(r))
      : getIDValue.posts?.(posts)
  );
  const HumanIdSet = new Set(
    Array.isArray(Human)
      ? Human.map((r) => getIDValue.Human?.(r))
      : getIDValue.Human?.(Human)
  );
  const postRecords = useDataStoreBinding({
    type: "collection",
    model: Post,
  }).items;
  const humanRecords = useDataStoreBinding({
    type: "collection",
    model: Human0,
  }).items;
  const getDisplayValue = {
    posts: (r) => `${r?.image ? r?.image + " - " : ""}${r?.id}`,
    Human: (r) => `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
  };
  const validations = {
    type: [],
    description: [],
    tokenAddress: [],
    tokenId: [],
    rootBaseket: [],
    posts: [],
    Human: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          type,
          description,
          tokenAddress,
          tokenId,
          rootBaseket,
          posts,
          Human,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            type: modelFields.type,
            description: modelFields.description,
            tokenAddress: modelFields.tokenAddress,
            tokenId: modelFields.tokenId,
            rootBaseket: modelFields.rootBaseket,
          };
          const baseket = await DataStore.save(new Baseket(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...posts.reduce((promises, post) => {
              promises.push(
                DataStore.save(
                  new BaseketPost({
                    baseket,
                    post,
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Human.reduce((promises, human) => {
              promises.push(
                DataStore.save(
                  new BaseketHuman({
                    baseket,
                    human,
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BaseketCreateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              description,
              tokenAddress,
              tokenId,
              rootBaseket,
              posts,
              Human,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description: value,
              tokenAddress,
              tokenId,
              rootBaseket,
              posts,
              Human,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Token address"
        isRequired={false}
        isReadOnly={false}
        value={tokenAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description,
              tokenAddress: value,
              tokenId,
              rootBaseket,
              posts,
              Human,
            };
            const result = onChange(modelFields);
            value = result?.tokenAddress ?? value;
          }
          if (errors.tokenAddress?.hasError) {
            runValidationTasks("tokenAddress", value);
          }
          setTokenAddress(value);
        }}
        onBlur={() => runValidationTasks("tokenAddress", tokenAddress)}
        errorMessage={errors.tokenAddress?.errorMessage}
        hasError={errors.tokenAddress?.hasError}
        {...getOverrideProps(overrides, "tokenAddress")}
      ></TextField>
      <TextField
        label="Token id"
        isRequired={false}
        isReadOnly={false}
        value={tokenId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description,
              tokenAddress,
              tokenId: value,
              rootBaseket,
              posts,
              Human,
            };
            const result = onChange(modelFields);
            value = result?.tokenId ?? value;
          }
          if (errors.tokenId?.hasError) {
            runValidationTasks("tokenId", value);
          }
          setTokenId(value);
        }}
        onBlur={() => runValidationTasks("tokenId", tokenId)}
        errorMessage={errors.tokenId?.errorMessage}
        hasError={errors.tokenId?.hasError}
        {...getOverrideProps(overrides, "tokenId")}
      ></TextField>
      <SwitchField
        label="Root baseket"
        defaultChecked={false}
        isDisabled={false}
        isChecked={rootBaseket}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              description,
              tokenAddress,
              tokenId,
              rootBaseket: value,
              posts,
              Human,
            };
            const result = onChange(modelFields);
            value = result?.rootBaseket ?? value;
          }
          if (errors.rootBaseket?.hasError) {
            runValidationTasks("rootBaseket", value);
          }
          setRootBaseket(value);
        }}
        onBlur={() => runValidationTasks("rootBaseket", rootBaseket)}
        errorMessage={errors.rootBaseket?.errorMessage}
        hasError={errors.rootBaseket?.hasError}
        {...getOverrideProps(overrides, "rootBaseket")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              type,
              description,
              tokenAddress,
              tokenId,
              rootBaseket,
              posts: values,
              Human,
            };
            const result = onChange(modelFields);
            values = result?.posts ?? values;
          }
          setPosts(values);
          setCurrentPostsValue(undefined);
          setCurrentPostsDisplayValue("");
        }}
        currentFieldValue={currentPostsValue}
        label={"Posts"}
        items={posts}
        hasError={errors?.posts?.hasError}
        errorMessage={errors?.posts?.errorMessage}
        getBadgeText={getDisplayValue.posts}
        setFieldValue={(model) => {
          setCurrentPostsDisplayValue(
            model ? getDisplayValue.posts(model) : ""
          );
          setCurrentPostsValue(model);
        }}
        inputFieldRef={postsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Posts"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Post"
          value={currentPostsDisplayValue}
          options={postRecords
            .filter((r) => !postsIdSet.has(getIDValue.posts?.(r)))
            .map((r) => ({
              id: getIDValue.posts?.(r),
              label: getDisplayValue.posts?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPostsValue(
              postRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPostsDisplayValue(label);
            runValidationTasks("posts", label);
          }}
          onClear={() => {
            setCurrentPostsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.posts?.hasError) {
              runValidationTasks("posts", value);
            }
            setCurrentPostsDisplayValue(value);
            setCurrentPostsValue(undefined);
          }}
          onBlur={() => runValidationTasks("posts", currentPostsDisplayValue)}
          errorMessage={errors.posts?.errorMessage}
          hasError={errors.posts?.hasError}
          ref={postsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "posts")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              type,
              description,
              tokenAddress,
              tokenId,
              rootBaseket,
              posts,
              Human: values,
            };
            const result = onChange(modelFields);
            values = result?.Human ?? values;
          }
          setHuman(values);
          setCurrentHumanValue(undefined);
          setCurrentHumanDisplayValue("");
        }}
        currentFieldValue={currentHumanValue}
        label={"Human"}
        items={Human}
        hasError={errors?.Human?.hasError}
        errorMessage={errors?.Human?.errorMessage}
        getBadgeText={getDisplayValue.Human}
        setFieldValue={(model) => {
          setCurrentHumanDisplayValue(
            model ? getDisplayValue.Human(model) : ""
          );
          setCurrentHumanValue(model);
        }}
        inputFieldRef={HumanRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Human"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Human"
          value={currentHumanDisplayValue}
          options={humanRecords
            .filter((r) => !HumanIdSet.has(getIDValue.Human?.(r)))
            .map((r) => ({
              id: getIDValue.Human?.(r),
              label: getDisplayValue.Human?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentHumanValue(
              humanRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentHumanDisplayValue(label);
            runValidationTasks("Human", label);
          }}
          onClear={() => {
            setCurrentHumanDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Human?.hasError) {
              runValidationTasks("Human", value);
            }
            setCurrentHumanDisplayValue(value);
            setCurrentHumanValue(undefined);
          }}
          onBlur={() => runValidationTasks("Human", currentHumanDisplayValue)}
          errorMessage={errors.Human?.errorMessage}
          hasError={errors.Human?.hasError}
          ref={HumanRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Human")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

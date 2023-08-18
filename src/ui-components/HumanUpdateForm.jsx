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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Human, Baseket, BaseketHuman } from "../models";
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
export default function HumanUpdateForm(props) {
  const {
    id: idProp,
    human: humanModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    basekets: [],
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [basekets, setBasekets] = React.useState(initialValues.basekets);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = humanRecord
      ? { ...initialValues, ...humanRecord, basekets: linkedBasekets }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setBasekets(cleanValues.basekets ?? []);
    setCurrentBaseketsValue(undefined);
    setCurrentBaseketsDisplayValue("");
    setErrors({});
  };
  const [humanRecord, setHumanRecord] = React.useState(humanModelProp);
  const [linkedBasekets, setLinkedBasekets] = React.useState([]);
  const canUnlinkBasekets = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Human, idProp)
        : humanModelProp;
      setHumanRecord(record);
      const linkedBasekets = record
        ? await Promise.all(
            (
              await record.basekets.toArray()
            ).map((r) => {
              return r.baseket;
            })
          )
        : [];
      setLinkedBasekets(linkedBasekets);
    };
    queryData();
  }, [idProp, humanModelProp]);
  React.useEffect(resetStateValues, [humanRecord, linkedBasekets]);
  const [currentBaseketsDisplayValue, setCurrentBaseketsDisplayValue] =
    React.useState("");
  const [currentBaseketsValue, setCurrentBaseketsValue] =
    React.useState(undefined);
  const baseketsRef = React.createRef();
  const getIDValue = {
    basekets: (r) => JSON.stringify({ id: r?.id }),
  };
  const baseketsIdSet = new Set(
    Array.isArray(basekets)
      ? basekets.map((r) => getIDValue.basekets?.(r))
      : getIDValue.basekets?.(basekets)
  );
  const baseketRecords = useDataStoreBinding({
    type: "collection",
    model: Baseket,
  }).items;
  const getDisplayValue = {
    basekets: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
  };
  const validations = {
    firstName: [],
    lastName: [],
    basekets: [],
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
          firstName,
          lastName,
          basekets,
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
          const promises = [];
          const baseketsToLinkMap = new Map();
          const baseketsToUnLinkMap = new Map();
          const baseketsMap = new Map();
          const linkedBaseketsMap = new Map();
          basekets.forEach((r) => {
            const count = baseketsMap.get(getIDValue.basekets?.(r));
            const newCount = count ? count + 1 : 1;
            baseketsMap.set(getIDValue.basekets?.(r), newCount);
          });
          linkedBasekets.forEach((r) => {
            const count = linkedBaseketsMap.get(getIDValue.basekets?.(r));
            const newCount = count ? count + 1 : 1;
            linkedBaseketsMap.set(getIDValue.basekets?.(r), newCount);
          });
          linkedBaseketsMap.forEach((count, id) => {
            const newCount = baseketsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                baseketsToUnLinkMap.set(id, diffCount);
              }
            } else {
              baseketsToUnLinkMap.set(id, count);
            }
          });
          baseketsMap.forEach((count, id) => {
            const originalCount = linkedBaseketsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                baseketsToLinkMap.set(id, diffCount);
              }
            } else {
              baseketsToLinkMap.set(id, count);
            }
          });
          baseketsToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const baseketHumanRecords = await DataStore.query(
              BaseketHuman,
              (r) =>
                r.and((r) => {
                  return [
                    r.baseketId.eq(recordKeys.id),
                    r.humanId.eq(humanRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(baseketHumanRecords[i]));
            }
          });
          baseketsToLinkMap.forEach((count, id) => {
            const baseketToLink = baseketRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new BaseketHuman({
                    human: humanRecord,
                    baseket: baseketToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            firstName: modelFields.firstName,
            lastName: modelFields.lastName,
          };
          promises.push(
            DataStore.save(
              Human.copyOf(humanRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HumanUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              basekets,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              basekets,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              basekets: values,
            };
            const result = onChange(modelFields);
            values = result?.basekets ?? values;
          }
          setBasekets(values);
          setCurrentBaseketsValue(undefined);
          setCurrentBaseketsDisplayValue("");
        }}
        currentFieldValue={currentBaseketsValue}
        label={"Basekets"}
        items={basekets}
        hasError={errors?.basekets?.hasError}
        errorMessage={errors?.basekets?.errorMessage}
        getBadgeText={getDisplayValue.basekets}
        setFieldValue={(model) => {
          setCurrentBaseketsDisplayValue(
            model ? getDisplayValue.basekets(model) : ""
          );
          setCurrentBaseketsValue(model);
        }}
        inputFieldRef={baseketsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Basekets"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Baseket"
          value={currentBaseketsDisplayValue}
          options={baseketRecords
            .filter((r) => !baseketsIdSet.has(getIDValue.basekets?.(r)))
            .map((r) => ({
              id: getIDValue.basekets?.(r),
              label: getDisplayValue.basekets?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBaseketsValue(
              baseketRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBaseketsDisplayValue(label);
            runValidationTasks("basekets", label);
          }}
          onClear={() => {
            setCurrentBaseketsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.basekets?.hasError) {
              runValidationTasks("basekets", value);
            }
            setCurrentBaseketsDisplayValue(value);
            setCurrentBaseketsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("basekets", currentBaseketsDisplayValue)
          }
          errorMessage={errors.basekets?.errorMessage}
          hasError={errors.basekets?.hasError}
          ref={baseketsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "basekets")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || humanModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || humanModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

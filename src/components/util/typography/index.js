import withAlignmentHelper, {
  withAlignmentPropTypes
} from './withAlignmentHelper';

import withFontSizeHelper, {
  withFontSizePropTypes
} from './withFontSizeHelper';

import withColorHelper, { withColorPropTypes } from './withColorHelper';

import withTextTransformationHelper, {
  withTextTransformationPropTypes
} from './withTextTransformationHelper';

import withTextWeightHelper, {
  withTextWeightPropTypes
} from './withTextWeightHelper';

export const withTypographyPropTypes = {
  ...withAlignmentPropTypes,
  ...withFontSizePropTypes,
  ...withColorPropTypes,
  ...withTextTransformationPropTypes,
  ...withTextWeightPropTypes
};

export default props => {
  return {
    ...withAlignmentHelper(props),
    ...withFontSizeHelper(props),
    ...withColorHelper(props),
    ...withTextTransformationHelper(props),
    ...withTextWeightHelper(props)
  };
};

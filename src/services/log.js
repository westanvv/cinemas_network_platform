import * as CONSTANT from '../constants/app'

export default function(title, value = '', level = CONSTANT.LOGGER.level.common) {
  if (CONSTANT.LOGGER.show) return true;

  switch (level) {

    case CONSTANT.LOGGER.level.component:
      if (CONSTANT.LOGGER.visibility.component) console.warn(title + (value === '' ? '' : ':'), value);
      break;

    case CONSTANT.LOGGER.level.api:
      if (CONSTANT.LOGGER.visibility.api) console.info(title + (value === '' ? '' : ':'), value);
      break;

    case CONSTANT.LOGGER.level.system:
      if (CONSTANT.LOGGER.visibility.api) console.info(title + (value === '' ? '' : ':'), value);
      break;

    default:
      if (CONSTANT.LOGGER.visibility.common) console.log(title + (value === '' ? '' : ':'), value);
  }
}

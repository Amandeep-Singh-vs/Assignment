import moment from 'moment'

import {
  ImageName,
  focus,
  follow,
  outerRing,
  scan,
  square,
} from '../constants/dActivechallenges-constants'
import { reflection, reminder, dActive } from '../constants/notification-constants'

/** formatTimeAgo: {This function returns the difference between the timeStamps.} */
export const formatTimeAgo = (notificationTime: string): string => {
  let currentTime = moment()
  let timeDifference = moment.duration(currentTime.diff(notificationTime)).humanize()
  return timeDifference
}

/** getImage: {This function returns the background image according to the name of challenge.} */
export const getImage = (name: string) => {
  let imageSrc
  switch (name) {
    case ImageName.dActiveImg1:
      imageSrc = outerRing
      break
    case ImageName.dActiveImg2:
      imageSrc = focus
      break
    case ImageName.dActiveImg3:
      imageSrc = scan
      break
    case ImageName.dActiveImg4:
      imageSrc = square
      break
    case ImageName.dActiveImg5:
      imageSrc = follow
      break
  }
  return imageSrc
}

/** getImage: {This function returns an image according to type of image.} */
export const getNotifyImage = (imageType: number) => {
  let imageName
  switch (imageType) {
    case 0:
      imageName = reflection
      break
    case 1:
      imageName = reminder
      break
    case 2:
      imageName = dActive
      break
  }
  return imageName
}

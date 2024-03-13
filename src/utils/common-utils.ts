import {
  outerRing,
  focus,
  scan,
  square,
  follow,
  ImageName,
} from '../constants/dActivechallenges-constants'
import { reflection, reminder, dActive } from '../constants/notification-constants'

/** formatTimeAgo: {This function returns an time in specific format according to time of notification.} */
export const formatTimeAgo = (notificationTime: any) => {
  const currentTime = new Date()
  const notificationDate = new Date()
  const [hours, minutes, seconds]: String[] = notificationTime.split(':')
  notificationDate.setDate(notificationDate.getDate())
  notificationDate.setHours(Number(hours), Number(minutes), Number(seconds))
  let timeDifference = currentTime.getTime() - notificationDate.getTime()
  timeDifference = timeDifference < 0 ? -1 * timeDifference : timeDifference
  const secondsAgo = Math.floor(timeDifference / 1000)
  const minutesAgo = Math.floor(secondsAgo / 60)
  const hoursAgo = Math.floor(minutesAgo / 60)
  const daysAgo = Math.floor(hoursAgo / 24)
  let formattedTime = undefined
  if (daysAgo > 0) {
    formattedTime = daysAgo + 'd ago'
  } else if (hoursAgo > 0) {
    formattedTime = hoursAgo + 'h ago'
  } else if (minutesAgo > 0) {
    formattedTime = minutesAgo + 'm ago'
  } else {
    formattedTime = secondsAgo + 's ago'
  }
  return formattedTime
}

/** getImage: {This function returns the background image according to the name of challenge.} */
export const getImage = (name: string) => {
  let imageSrc: any = undefined
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
  let imageName = undefined
  if (imageType == 0) {
    imageName = reflection
  } else if (imageType == 1) {
    imageName = reminder
  } else if (imageType == 2) {
    imageName = dActive
  }
  return imageName
}
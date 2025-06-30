 'use client'

 import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

export default function NextNprogressProviders  ({children}) {
  return (
    <div>
        {children}
        <ProgressBar height='4px' color='#fffd00' options={{showSpinner:false}} shallowRouting  />
    </div>
  )
}


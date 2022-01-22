import React from 'react'

import { preventDefault } from '@/lib/ui'

import MainLayout from '@/layouts/MainLayout'
import useField from '@/hooks/useField'

export default function IndexPage() {
  const [email, emailSubscriber] = useField('')

  const handleSubmit = () => {
    console.log('Form has been submitted')
    console.log(email)
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-screen-lg min-h-[90vh] flex flex-col items-center justify-center">
        <h1 className="mb-16 text-8xl text-white font-extrabold tracking-tighter text-center">
          The first ACME global user conference
        </h1>
        <div className="mb-16 text-2xl text-center text-purple-600">
          <p>
            OCTOBER 27, 2022 | <b>ONLINE</b>
          </p>
        </div>
        <div className="flex justify-center w-[90%] max-w-md">
          <form
            onSubmit={preventDefault(handleSubmit)}
            className="p-2 flex flex-1 justify-between gap-2 bg-neutral-800 rounded"
          >
            <input
              className="ml-2 bg-transparent outline-none"
              type="text"
              placeholder="Enter email to register for free"
              {...emailSubscriber}
            />
            <button className="py-2 px-8 text-white bg-purple-600 rounded border transition-all border-purple-600 hover:bg-black ">
              Register
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

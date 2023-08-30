import React from 'react'

const Service = () => {

    const cajas = [
        {
            image: 'https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png',
            title: 'Using Abstract',
            paragraph: 'Abstract lets you manage, version, and document your designs in one place.'
        },
        {
            image: 'https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png',
            title: 'Manage your account',
            paragraph: 'Configure your account settings, such as your email, profile details, and password.'
        },
        {
            image: 'https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png',
            title: 'Manage organizations, teams, and projects',
            paragraph: 'Use Abstract organizations, teams, and projects to organize your people and your work.'
        },
        {
            image: 'https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png',
            title: 'Manage billing',
            paragraph: 'Change subscriptions and payment details.'
        },
        {
            image: 'https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png',
            title: 'Authenticate to Abstractg',
            paragraph: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.'
        },
        {
            image: 'https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png',
            title: 'Abstract support',
            paragraph: 'Get in touch with a human.'
        }
    ]

  return (
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 grid-cols-1 pt-[10rem] '>
        {
            cajas.map((caja) => {
              return <div className='flex items-start mx-auto mb-[7rem] w-[500px]'>
                    <img src={caja.image} className='w-[80px]' alt="" />
                    <div className="flex flex-col pl-3">
                        <h1 className='text-[24px] font-bold'>{caja.title}</h1>
                        <p className='pt-5 text-[24px]'>{caja.paragraph}</p>
                        <a className='pt-5 text-[#4C5FD5]' href="/">Learn More</a>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default Service
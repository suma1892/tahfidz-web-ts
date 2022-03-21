import Head from "next/head";
import { NextPage } from 'next'

type Props = {
  title?: '',
  description?: '',
  image?: ''
}

const Meta: NextPage<Props> = ({
  title = 'Yayasan Istiqomah Tarbiyah Sunnah',
  description = 'Sekolah islam sunnah',
  image = "/logo.png"
}) => {

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="3 days" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="https://pondokselerasunda.com/" />
      <meta key="tw-title" name="twitter:title" content={title} />
      <meta key="tw-description" name="twitter:description" content={description} />
      <meta key="tw-url" name="twitter:url" content={"https://pondokselerasunda.com/"} />
    </Head>
  )
}

export default Meta

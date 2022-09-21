import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Card from '../../../components/Card'
import Cards from '../../../components/Cards'
import Title from '../../../components/Title'

const Subject = () => {
  const router = useRouter()
  const name = `${router.query.class}_${router.query.subject}`

  if (router.query.subject == 'physics1') {
    return (
      <>
        <Head>
          <title>Physics 1st</title>
        </Head>
        <div className='py-12'>
          <Title>Physics 1st</Title>
          <Cards>
            {
              physics1.map((item, i) => (
                <div key={i} className='xs:px-4 px-[5px]'>
                  <div key={i} className='m-auto max-w-xs'>
                    <Card num={item.id} name={item.name} slug={`/hsc/${router.query.subject}/${item.id}`} />
                  </div>
                </div>
              ))
            }
          </Cards>
        </div>
      </>
    )
  }

  if (router.query.subject == 'physics2') {
    return (
      <>
        <Head>
          <title>Physics 2</title>
        </Head>
        <div className='py-12'>
          <Title>Physics 2nd</Title>
          <Cards>
            {
              physics2.map((item, i) => (
                <div key={i} className='xs:px-4 px-[5px]'>
                  <div key={i} className='m-auto max-w-xs'>
                    <Card num={item.id} name={item.name} slug={`/hsc/${router.query.subject}/${item.id}`} />
                  </div>
                </div>
              ))
            }
          </Cards>
        </div>
      </>
    )
  }

  if (router.query.subject == 'hmath1') {
    return (
      <>
        <Head>
          <title>Higher Math 1st</title>
        </Head>
        <div className='py-12'>
          <Title>Higher Math 1st</Title>
          <Cards>
            {
              hmath1.map((item, i) => (
                <div key={i} className='xs:px-4 px-[5px]'>
                  <div key={i} className='m-auto max-w-xs'>
                    <Card num={item.id} name={item.name} slug={`/hsc/${router.query.subject}/${item.id}`} />
                  </div>
                </div>
              ))
            }
          </Cards>
        </div>
      </>
    )
  }

  if (router.query.subject == 'hmath2') {
    return (
      <>
        <Head>
          <title>Higher Math 2nd</title>
        </Head>
        <div className='py-12'>
          <Title>Higher Math 2nd</Title>
          <Cards>
            {
              hmath2.map((item, i) => (
                <div key={i} className='xs:px-4 px-[5px]'>
                  <div key={i} className='m-auto max-w-xs'>
                    <Card num={item.id} name={item.name} slug={`/hsc/${router.query.subject}/${item.id}`} />
                  </div>
                </div>
              ))
            }
          </Cards>
        </div>
      </>
    )
  }

  if (router.query.subject == 'chemestry1') {
    return (
      <>
        <Head>
          <title>Chemestry 1st</title>
        </Head>
        <div className='py-12'>
          <Title>Chemestry 1st</Title>
          <Cards>
            {
              chemestry1.map((item, i) => (
                <div key={i} className='xs:px-4 px-[5px]'>
                  <div key={i} className='m-auto max-w-xs'>
                    <Card num={item.id} name={item.name} slug={`/hsc/${router.query.subject}/${item.id}`} />
                  </div>
                </div>
              ))
            }
          </Cards>
        </div>
      </>
    )
  }

  if (router.query.subject == 'chemestry2') {
    return (
      <>
        <Head>
          <title>Chemestry 2nd</title>
        </Head>
        <div className='py-12'>
          <Title>Chemestry 2nd</Title>
          <Cards>
            {
              chemestry2.map((item, i) => (
                <div key={i} className='xs:px-4 px-[5px]'>
                  <div key={i} className='m-auto max-w-xs'>
                    <Card num={item.id} name={item.name} slug={`/hsc/${router.query.subject}/${item.id}`} />
                  </div>
                </div>
              ))
            }
          </Cards>
        </div>
      </>
    )
  }

  if (router.query.subject == 'biology1') {
    return (
      <>
        <Head>
          <title>Biology 1st</title>
        </Head>
        <div className='py-12'>
          <Title>Biology 1st</Title>
          <Cards>
            {
              biology1.map((item, i) => (
                <div key={i} className='xs:px-4 px-[5px]'>
                  <div key={i} className='m-auto max-w-xs'>
                    <Card num={item.id} name={item.name} slug={`/hsc/${router.query.subject}/${item.id}`} />
                  </div>
                </div>
              ))
            }
          </Cards>
        </div>
      </>
    )
  }

  if (router.query.subject == 'biology2') {
    return (
      <>
        <Head>
          <title>Biology 2nd</title>
        </Head>
        <div className='py-12'>
          <Title>Biology 2nd</Title>
          <Cards>
            {
              biology2.map((item, i) => (
                <div key={i} className='xs:px-4 px-[5px]'>
                  <div key={i} className='m-auto max-w-xs'>
                    <Card num={item.id} name={item.name} slug={`/hsc/${router.query.subject}/${item.id}`} />
                  </div>
                </div>
              ))
            }
          </Cards>
        </div>
      </>
    )
  }

  return (
    <h1 className='text-2xl font-semibold'>Didnt get the subject</h1>
  )

}

export default index

const physics1 = [
  {
    id: 1,
    name: 'ভৌতজগত ও পরিমাপ',
  },
  {
    id: 2,
    name: 'ভেক্টর',
  },
  {
    id: 3,
    name: 'গতিবিদ্যা',
  },
  {
    id: 4,
    name: 'নিউটনীয় বলবিদ্যা',
  },
  {
    id: 5,
    name: 'কাজ, ক্ষমতা, শক্তি',
  },
  {
    id: 6,
    name: 'মহাকর্ষ ও অভিকর্ষ',
  },
  {
    id: 7,
    name: 'পদার্থের গাঠনিক ধর্ম',
  },
  {
    id: 8,
    name: 'পর্যাবৃত্তিক গতি',
  },
  {
    id: 9,
    name: 'তরঙ্গ',
  },
  {
    id: 10,
    name: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব',
  },
]

const physics2 = [
  {
    id: 1,
    name: 'তাপগতিবিদ্যা',
  },
  {
    id: 2,
    name: 'স্থির তড়িৎ',
  },
  {
    id: 3,
    name: 'চল তড়িৎ',
  },
  {
    id: 4,
    name: 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব',
  },
  {
    id: 5,
    name: 'তাড়িতচৌম্বকীয় আবেশ ও পরবর্তী প্রবাহ',
  },
  {
    id: 6,
    name: 'জ্যামিতিক আলোকবিজ্ঞান',
  },
  {
    id: 7,
    name: 'ভৌত আলোকবিজ্ঞান',
  },
  {
    id: 8,
    name: 'আধুনিক পদার্থবিজ্ঞানের সূচনা',
  },
  {
    id: 9,
    name: 'পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান',
  },
  {
    id: 10,
    name: 'সেমিকন্ডাক্টর ও ইলেকট্রনিক্স',
  },
  {
    id: 11,
    name: 'জ্যোতির্বিজ্ঞান',
  },
]

const hmath1 = [
  {
    id: 1,
    name: 'ম্যাট্রিক্স ও নির্ণায়ক',
  },
  {
    id: 2,
    name: 'ভেক্টর',
  },
  {
    id: 3,
    name: 'সরল রেখা',
  },
  {
    id: 4,
    name: 'বৃত্ত',
  },
  {
    id: 5,
    name: 'বিন্যাস ও সমাবেশ',
  },
  {
    id: 6,
    name: 'ত্রিকোণমিতিক অনুপাত',
  },
  {
    id: 7,
    name: 'সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত',
  },
  {
    id: 8,
    name: 'ফাংশন ও ফাংশনের লেখচিত্র',
  },
  {
    id: 9,
    name: 'অন্তরীকরণ',
  },
  {
    id: 10,
    name: 'যোগজীকরণ',
  },
]

const hmath2 = [
  {
    id: 1,
    name: 'বাস্তব সংখ্যা ও অসমতা',
  },
  {
    id: 2,
    name: 'যোগাশ্রয়ী প্রোগ্রাম',
  },
  {
    id: 3,
    name: 'জটিল সংখ্যা',
  },
  {
    id: 4,
    name: 'বহুপদী ও বহুপদী সমীকরণ',
  },
  {
    id: 5,
    name: 'দ্বিপদী বিস্তৃতি',
  },
  {
    id: 6,
    name: 'কনিকস',
  },
  {
    id: 7,
    name: 'বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ',
  },
  {
    id: 8,
    name: 'স্থিতিবিদ্যা',
  },
  {
    id: 9,
    name: 'সমতলে বস্তুকণার গতি',
  },
  {
    id: 10,
    name: 'বিস্তার, পরিমাপ ও সম্ভাবনা',
  },
]

const biology1 = [
  {
    id: 1,
    name: 'কোষ ও এর গঠন',
  },
  {
    id: 2,
    name: 'কোষ বিভাজন',
  },
  {
    id: 3,
    name: 'কোষ রসায়ন',
  },
  {
    id: 4,
    name: 'অণুজীব',
  },
  {
    id: 5,
    name: 'শৈবাল ও ছত্রাক',
  },
  {
    id: 6,
    name: 'ব্রায়োফাইটা ও টেরিডোফাইটা',
  },
  {
    id: 7,
    name: 'নগ্নবীজি ও আবৃতবীজি উদ্ভিদ',
  },
  {
    id: 8,
    name: 'টিস্যু ও টিস্যুতন্ত্র',
  },
  {
    id: 9,
    name: 'উদ্ভিদ শারীরতত্ত্ব',
  },
  {
    id: 10,
    name: 'উদ্ভিদ প্রজনন',
  },
  {
    id: 11,
    name: 'জীবপ্রযুক্তি',
  },
  {
    id: 12,
    name: 'জীবের পরিবেশ, বিস্তার ও সংরক্ষণ',
  },
]

const biology2 = [
  {
    id: 1,
    name: 'প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস',
  },
  {
    id: 2,
    name: 'প্রাণীর পরিচিতি',
  },
  {
    id: 3,
    name: 'মানব শারীরতত্ত্বঃ পরিপাক ও শোষণ',
  },
  {
    id: 4,
    name: 'মানব শারীরতত্ত্বঃ রক্ত ও সঞ্চালন',
  },
  {
    id: 5,
    name: 'মানব শারীরতত্ত্বঃ শ্বসনক্রিয়া ও শ্বসন',
  },
  {
    id: 6,
    name: 'মানব শারীরতত্ত্বঃ বর্জ্য ও নিষ্কাশন',
  },
  {
    id: 7,
    name: 'মানব শারীরতত্ত্বঃ চলন ও অঙ্গচালনা',
  },
  {
    id: 8,
    name: 'মানব শারীরতত্ত্বঃ সমন্বয় ও নিয়ন্ত্রণ',
  },
  {
    id: 9,
    name: 'মানব শারীরতত্ত্বঃ মানব জীবনের ধারাবাহিকত',
  },
  {
    id: 10,
    name: 'মানবদেহের প্রতিরক্ষা',
  },
  {
    id: 11,
    name: 'জীনতত্ত্ব ও বিবর্তন',
  },
  {
    id: 12,
    name: 'প্রাণীর আচরণ',
  },
]

const chemestry1 = [
  {
    id: 1,
    name: 'ল্যাবরেটরির নিরাপদ ব্যবহার',
  },
  {
    id: 2,
    name: 'গুনগত রসায়ন',
  },
  {
    id: 3,
    name: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন',
  },
  {
    id: 4,
    name: 'রাসায়নিক পরিবর্তন',
  },
  {
    id: 5,
    name: 'কর্মমুখী রসায়ন',
  },
]

const chemestry2 = [
  {
    id: 1,
    name: 'পরিবেশ রসায়ন',
  },
  {
    id: 2,
    name: 'জৈব রসায়ন',
  },
  {
    id: 3,
    name: 'পরিমাণগত রসায়ন',
  },
  {
    id: 4,
    name: 'তড়িৎ রসায়ন',
  },
  {
    id: 5,
    name: 'অর্থনৈতিক রসায়ন',
  },
]


// TODO:SSC
const physics = [
  {
    id: 1,
    name: '',
  },
  {
    id: 2,
    name: '',
  },
  {
    id: 3,
    name: '',
  },
  {
    id: 4,
    name: '',
  },
  {
    id: 5,
    name: '',
  },
  {
    id: 6,
    name: '',
  },
  {
    id: 7,
    name: '',
  },
  {
    id: 8,
    name: '',
  },
  {
    id: 9,
    name: '',
  },
  {
    id: 10,
    name: '',
  },
]
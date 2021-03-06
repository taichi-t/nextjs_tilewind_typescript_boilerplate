import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import Introduction from '@/components/Introduction/Introduction';
import Works from '@/components/Works/Works';
import { GetStaticProps } from 'next';
import { getSelectedWorkData } from '@/utils/work';
import { HIGHTLIGHTED_WORKS } from '@/constants/config';
import { IWork } from '@/types/works';
import { useIntl } from 'react-intl';

type Props = {
  [key: string]: IWork;
};

export default function IndexPage(props: Props) {
  const { formatMessage: f } = useIntl();
  return (
    <>
      <Head>
        <title>{f({ id: 'home' })}</title>
      </Head>
      <main>
        <Hero />
        <Introduction />
        <Works works={props} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const works = await getSelectedWorkData(HIGHTLIGHTED_WORKS);
  return {
    props: { ...works },
  };
};

IndexPage.Layout = Layout;

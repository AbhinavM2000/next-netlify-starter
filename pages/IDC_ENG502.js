import { builder, BuilderComponent } from '@builder.io/react'

builder.init('e181c0364b3a4a6a91c561234473a2ae')

export const getStaticProps = async (context) => {
  const content = await builder.get('page', { url: context.resolvedUrl }).promise();

  return { 
    props: { content }, 
    revalidate: true,
    notFound: !content
  }
}

const MyComponent = (props) => (
  <BuilderComponent
    content={props.content}
    model="page" />
)

export default MyComponent;

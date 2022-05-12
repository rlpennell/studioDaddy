import React from 'react';
import { Card, Text, Flex } from '@sanity/ui';
import { withDocument } from 'part:@sanity/form-builder';
import styled from 'styled-components';

const Image = styled.img`
  margin: 2rem auto;
  width: 90%;
`;

const Wireframe = props => {
  const { document } = props;

  return (
    <Card padding={[3, 3, 4]} radius={2} shadow={1}>
      <Flex direction='column' justify='center'>
        <Text align='center' size={2}>
          Template Preview
        </Text>
        <Image src={`../../static/${document.template}.jpg`} />
      </Flex>
    </Card>
  );
};

export default withDocument(Wireframe);

import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background: #0D1F2D;
  color: white;
  padding: 40px 20px;
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
  &:nth-child(even) {
    background: #1A2F40;
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const App = () => {
  return (
    <div>
      <Section>
        <Content>
          <h1>Section 1</h1>
          <p>This is the first section.</p>
        </Content>
      </Section>
      <Section>
        <Content>
          <h1>Section 2</h1>
          <p>This is the second section.</p>
        </Content>
      </Section>
      <Section>
        <Content>
          <h1>Section 3</h1>
          <p>This is the third section.</p>
        </Content>
      </Section>
    </div>
  );
}

export default App;

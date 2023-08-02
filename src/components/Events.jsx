import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
import SectionTitle from './SectionTitle';

// const query = graphql`
//   query {
//     allAirtable(filter: { table: { eq: "Events" } }) {
//       nodes {
//         id
//         data {
//           title
//           date
//           address
//           showUrl
//           ticketUrl
//           time
//           locationName
//           image {
//             localFiles {
//               childrenImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default function Events() {
  // const data = useStaticQuery(query);

  // const events = data.allAirtable.nodes || [];
  const events = [];
  if (events.length <= 0) return null;

  return (
    <>
      <div id="events" className="inner-column">
        <SectionTitle
          title="Concerts"
          subtitle="Purchase tickets to upcoming shows"
        />
        <Grid count={events.length}>
          {events.map((event) => {
            return <EventCard key={event.id} {...event.data} />;
          })}
        </Grid>
      </div>
      <PageBreak />
    </>
  );
}

const PageBreak = () => (
  <div style={{ flexGrow: 1, display: 'flex', padding: '50px' }}></div>
);

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

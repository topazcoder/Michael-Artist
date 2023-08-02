import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Button from './Button';
import FlipMove from 'react-flip-move';
import Modal from './Modal';

// const query = graphql`
//   query GetGalleryImages {
//     allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
//       nodes {
//         id
//         name
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//         }
//       }
//     }
//   }
// `;

const query = graphql`
  query GetAirtableGalleryImages {
    allAirtable(
      filter: { table: { eq: "GalleryImages" } }
      sort: { fields: data___order, order: ASC }
    ) {
      nodes {
        id
        data {
          image {
            localFiles {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;

function Gallery() {
  const [showMore, setShowMore] = useState(false);
  const [modalImageId, setModalImageId] = useState(null);

  const data = useStaticQuery(query);
  // const nodes = data.allFile.nodes;
  const nodes = data.allAirtable.nodes;
  const nodesToDisplay = showMore ? nodes : nodes.slice(0, 6);

  return (
    <Wrapper className="page-section gallery">
      <div className="inner-column">
        <SectionTitle title="Gallery" />

        <FlipMove>
          <Grid>
            {nodesToDisplay.map((node, idx, arr) => {
              const {
                id /* childImageSharp: image*/,
                data: { image },
              } = node;
              // const imageSrc = getImage(image);
              const imageSrc = getImage(
                image?.localFiles[0].childrenImageSharp[0]
              );

              return (
                <React.Fragment key={id}>
                  <div
                    role="presentation"
                    style={{ cursor: 'pointer' }}
                    onKeyDown={() => setModalImageId(id)}
                    onClick={() => setModalImageId(id)}>
                    <GatsbyImage
                      image={imageSrc}
                      className="gallery__image"
                      alt={image?.name ?? `Daniel Michael gallery image ${idx} of ${arr.length}`}
                    />
                  </div>

                  <Modal
                    isOpen={modalImageId === id}
                    setIsOpen={setModalImageId}>
                    <div style={{ maxHeight: '80vh', overflow: 'hidden' }}>
                      <GatsbyImage
                        image={imageSrc}
                        className="gallery__image__modal"
                        alt={`Daniel Michael gallery image ${idx} of ${arr.length}`}
                      />
                    </div>
                  </Modal>
                </React.Fragment>
              );
            })}
          </Grid>
        </FlipMove>

        <div className="button-container">
          <Button
            text={showMore ? 'Show Less' : 'Show More'}
            onClick={() => setShowMore((prevState) => !prevState)}
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .button-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Grid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-gap: 29px;
  margin-top: 44px;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  /* grid-auto-rows: 280px; */

  @media screen and (max-width: 500px) {
    grid-gap: 10px;
  }

  .gallery__image,
  .gallery__image__modal {
    height: 100%;
    width: 100%;
  }

  .gallery__image {
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Gallery;

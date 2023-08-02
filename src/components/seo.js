/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const titleTemplate = title ? title : defaultTitle;

  return (
    <>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="image"
        content="https://www.danielmichaelmusic.com/og-image.jpg"
      />
      {/* <meta name="og:image" content={site.siteMetadata?.image} /> */}
      <meta
        name="og:image:safe"
        content="https://www.danielmichaelmusic.com/og-image.jpg"
      />
      <meta
        property="og:image"
        content="https://www.danielmichaelmusic.com/og-image.jpg"
      />

      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={site.siteMetadata?.image} />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={titleTemplate} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
}

Seo.defaultProps = {
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;

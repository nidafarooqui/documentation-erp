/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("doc1.html", this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl("doc2.html", this.props.language)}>Guides</a>
            <a href={this.docUrl("doc4.html", this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="http://203.135.63.70/assemble_empty_node/requirement_specs.jsp">
              Assemble Empty Node
            </a>
            <a href="https://github.com/nidafarooqui/erp">GitHub</a>
            <a
              className="github-button"
              href="https://github.com/nidafarooqui/erp"
              data-icon="octicon-star"
              data-count-href="/nidafarooqui/erp/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;

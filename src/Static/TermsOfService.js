/*
 * Copyright (c) 2018 990 Consulting, LLC. All rights reserved.
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { styles } from 'Static/legalStyles'

import MaxContainer from 'hoc/MaxContainer';
import classNames from 'classnames';

import {
  root,
  copyrightPolicy,
  privacyPolicy,
  mail,
  consulting,
  openData
} from 'App/routes';

class TermsOfService extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <Fragment>
        <Helmet>
          <title>Open990 Terms of Service</title>
          <meta name="description" content="Search database of charities, foundations, and other nonprofits--revenues, compensation, fundraising, mission, etc. View profiles free, no registration." />
          <meta name="robots" content="noindex"/>
        </Helmet>
        <div className={classNames(
          'TermsOfServicePage',
          classes.root
        )}>
          <MaxContainer>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Grid item xs={12} md={10}>
                  <div className={classes.policyHeader}>
                    <h1>Terms of service</h1>
                  </div>
                  <div className={classes.staticMainContent}>
                    <p>Please read these Terms of Service (collectively with 990 Consulting, L.L.C’s&nbsp;
                      <a href={privacyPolicy}>Privacy Policy</a>&nbsp;and&nbsp;
                      <a href={copyrightPolicy}>DMCA Copyright Policy</a>, the “<u>Terms of
                        Service</u>”) fully and carefully before using&nbsp;
                      <a href={openData}>opendata.love</a>,&nbsp;
                      <a href={root}>open990.com</a> and/or&nbsp;
                      <a href={consulting}>990consulting.com</a> (each, a “<u>Site</u>” and together, the
                      “<u>Sites</u>”) and the services, features or content offered by 990 Consulting L.L.C. (“<u>we</u>”,
                      “<u>us</u>” or “<u>our</u>”) (together with the Sites, the “<u>Services</u>”). These Terms of Service
                      set
                      forth the legally binding terms and conditions for your use of the Sites and the Services.</p>
                    <ol>
                      <li><span className={classes.chapterTitle}>Acceptance of Terms of Service</span>.
                        <ol type="a">
                          <li>By registering for and/or using the Services in any manner, including but not limited to
                            visiting
                            or
                            browsing the Site, you agree to these Terms of Service and all other operating rules, policies
                            and
                            procedures that may be published from time to time on the Site by us, each of which is
                            incorporated
                            by
                            reference and each of which may be updated from time to time without notice to you.
                          </li>
                          <li>Certain of the Services may be subject to additional terms and conditions specified by us from
                            time
                            to time; your use of such Services is subject to those additional terms and conditions, which
                            are
                            incorporated into these Terms of Service by this reference.
                          </li>
                          <li>These Terms of Service apply to all users of the Services, including, without limitation,
                            users
                            who
                            are contributors of content, information, and other materials or services, registered or
                            otherwise.
                          </li>
                        </ol>
                      </li>
                      <li><span className={classes.chapterTitle}>Eligibility</span>. You represent and warrant that you are
                        at
                        least 13 years of age. If you
                        are under age 13, you may not, under any circumstances or for any reason, use the Services. We may,
                        in
                        our
                        sole discretion, refuse to offer the Services to any person or entity and change its eligibility
                        criteria
                        at any time. You are solely responsible for ensuring that these Terms of Service are in compliance
                        with
                        all laws, rules and regulations applicable to you and the right to access the Services is revoked
                        where
                        these Terms of Service or use of the Services is prohibited or to the extent offering, sale or
                        provision
                        of the Services conflicts with any applicable law, rule or regulation. Further, the Services are
                        offered
                        only for your use, and not for the use or benefit of any third party.
                      </li>
                      <li><span className={classes.chapterTitle}>Registration</span>. To sign up for the Services, you must
                        register for an account on the
                        Services (an “<u>Account</u>”). You must provide accurate and complete information and keep your
                        Account
                        information updated. You shall not: (i) select or use as a username a name of another person with
                        the
                        intent to impersonate that person; (ii) use as a username (if applicable) a name subject to any
                        rights
                        of
                        a person other than you without appropriate authorization; or (iii) use, as a username (if
                        applicable),
                        a
                        name that is otherwise offensive, vulgar or obscene. You are solely responsible for the activity
                        that
                        occurs on your Account, and for keeping your Account password secure. You may never use another
                        person’s
                        user account or registration information for the Services without permission. You must notify us
                        immediately of any change in your eligibility to use the Services (including any changes to or
                        revocation
                        of any licenses from state authorities), breach of security or unauthorized use of your Account. You
                        should never publish, distribute or post login information for your Account. You shall have the
                        ability
                        to
                        delete your Account, either directly or through a request made to one of our employees or
                        affiliates.
                      </li>
                      <li><span className={classes.chapterTitle}>Content</span>.
                        <ol type="a">
                          <li><span className={classes.chapterTitle}>Definition</span>. For purposes of these Terms of
                            Service,
                            the term “<u>Content</u>”
                            includes, without limitation, information, data, text, photographs, videos, audio clips, written
                            posts
                            and comments, software, scripts, graphics, and interactive features generated, provided, or
                            otherwise
                            made accessible on or through the Services. For the purposes of this Agreement, “Content” also
                            includes all User Content (as defined below).
                          </li>
                          <li><span className={classes.chapterTitle}>User Content</span>. All Content added, created,
                            uploaded,
                            submitted, distributed, or
                            posted to the Services by users (collectively “<u>User Content</u>”), whether publicly posted or
                            privately transmitted, is the sole responsibility of the person who originated such User
                            Content.
                            You
                            represent that all User Content provided by you is accurate, complete, up-to-date, and in
                            compliance
                            with all applicable laws, rules and regulations. You acknowledge that all Content, including
                            User
                            Content, accessed by you using the Services is at your own risk and you will be solely
                            responsible
                            for
                            any damage or loss to you or any other party resulting therefrom. We do not guarantee that any
                            Content
                            you access on or through the Services is or will continue to be accurate.
                          </li>
                          <li><span className={classes.chapterTitle}>Notices and Restrictions</span>. The Services may
                            contain
                            Content specifically provided by
                            us, our partners or our users and such Content is protected by copyrights, trademarks, service
                            marks,
                            patents, trade secrets or other proprietary rights and laws. You shall abide by and maintain all
                            copyright notices, information, and restrictions contained in any Content accessed through the
                            Services.
                          </li>
                          <li><span className={classes.chapterTitle}>Use License</span>. Subject to these Terms of Service,
                            we
                            grant each user of the Services
                            a worldwide, non-exclusive, non-sublicensable and non-transferable license to use (i.e., to
                            download
                            and display locally) Content solely for purposes of using the Services. Use, reproduction,
                            modification, distribution or storage of any Content for other than purposes of using the
                            Services
                            is
                            expressly prohibited without prior written permission from us. You shall not sell, license,
                            rent, or
                            otherwise use or exploit any Content for commercial use or in any way that violates any third
                            party
                            right.
                          </li>
                          <li><span className={classes.chapterTitle}>License Grant</span>. By submitting User Content
                            through
                            the Services, you hereby do and
                            shall grant us a worldwide, non-exclusive, perpetual, royalty-free, fully paid, sublicensable
                            and
                            transferable license to use, edit, modify, truncate, aggregate, reproduce, distribute, prepare
                            derivative works of, display, perform, and otherwise fully exploit the User Content in
                            connection
                            with
                            the Site, the Services and our (and our successors’ and assigns’) businesses, including without
                            limitation for promoting and redistributing part or all of the Site or the Services (and
                            derivative
                            works thereof) in any media formats and through any media channels (including, without
                            limitation,
                            third party websites and feeds), and including after your termination of your Account or the
                            Services.
                            You also hereby do and shall grant each user of the Site and/or the Services a non-exclusive,
                            perpetual license to access your User Content through the Site and/or the Services, and to use,
                            edit,
                            modify, reproduce, distribute, prepare derivative works of, display and perform such User
                            Content,
                            including after your termination of your Account or the Services. For clarity, the foregoing
                            license
                            grants to us and our users do not affect your other ownership or license rights in your User
                            Content,
                            including the right to grant additional licenses to your User Content, unless otherwise agreed
                            in
                            writing. You represent and warrant that you have all rights to grant such licenses to us without
                            infringement or violation of any third party rights, including without limitation, any privacy
                            rights,
                            publicity rights, copyrights, trademarks, contract rights, or any other intellectual property or
                            proprietary rights.
                          </li>
                          <li><span className={classes.chapterTitle}>Availability of Content</span>. We do not guarantee
                            that
                            any Content will be made
                            available on the Site or through the Services. We reserve the right to, but do not have any
                            obligation
                            to, (i) remove, edit or modify any Content in our sole discretion, at any time, without notice
                            to
                            you
                            and for any reason (including, but not limited to, upon receipt of claims or allegations from
                            third
                            parties or authorities relating to such Content or if we are concerned that you may have
                            violated
                            these Terms of Service), or for no reason at all and (ii) to remove or block any Content from
                            the
                            Services.
                          </li>
                        </ol>
                      </li>
                      <li><span className={classes.chapterTitle}>Rules of Conduct</span>.
                        <ol type="a">
                          <li>As a condition of use, you promise not to use the Services for any purpose that is prohibited
                            by
                            these Terms of Service. You are responsible for all of your activity in connection with the
                            Services.
                          </li>
                          <li>You shall not (and shall not permit any third party to) either (a) take any action or (b)
                            upload,
                            download, post, submit or otherwise distribute or facilitate distribution of any Content on or
                            through
                            the Service, including without limitation any User Content, that:
                            <ol type="i">
                              <li>infringes any patent, trademark, trade secret, copyright, right of publicity or other
                                right of
                                any other person or entity or violates any law or contractual duty (see our <a
                                  href={copyrightPolicy}>DMCA Copyright Policy</a>);
                              </li>
                              <li>you know is false, misleading, untruthful or inaccurate;</li>
                              <li>is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent,
                                invasive of another's privacy, tortious, obscene, vulgar, pornographic, offensive, profane,
                                contains or depicts nudity, contains or depicts sexual activity, or is otherwise
                                inappropriate
                                as
                                determined by us in our sole discretion;
                              </li>
                              <li>constitutes unauthorized or unsolicited advertising, junk or bulk e-mail (“spamming”);
                              </li>
                              <li>contains software viruses or any other computer codes, files, or programs that are
                                designed or
                                intended to disrupt, damage, limit or interfere with the proper function of any software,
                                hardware, or telecommunications equipment or to damage or obtain unauthorized access to any
                                system, data, password or other information of ours or of any third party;
                              </li>
                              <li>impersonates any person or entity, including any of our employees or representatives; or
                              </li>
                              <li>includes anyone’s identification documents or sensitive financial information.</li>
                            </ol>
                          </li>
                          <li>You shall not: (i) take any action that imposes or may impose (as determined by us in our sole
                            discretion) an unreasonable or disproportionately large load on our (or our third party
                            providers’)
                            infrastructure; (ii) interfere or attempt to interfere with the proper working of the Services
                            or
                            any
                            activities conducted on the Services; (iii) bypass, circumvent or attempt to bypass or
                            circumvent
                            any
                            measures we may use to prevent or restrict access to the Services (or other accounts, computer
                            systems
                            or networks connected to the Services); (iv) run any form of auto-responder or “spam” on the
                            Services;
                            (v) use manual or automated software, devices, or other processes to “crawl” or “spider” any
                            page of
                            the Site; (vi) harvest or scrape any Content from the Services; or (vii) otherwise take any
                            action
                            in
                            violation of our guidelines and policies.
                          </li>
                          <li>You shall not (directly or indirectly): (i) decipher, decompile, disassemble, reverse engineer
                            or
                            otherwise attempt to derive any source code or underlying ideas or algorithms of any part of the
                            Services (including without limitation any application), except to the limited extent applicable
                            laws
                            specifically prohibit such restriction, (ii) modify, translate, or otherwise create derivative
                            works
                            of any part of the Services, or (iii) copy, rent, lease, distribute, or otherwise transfer any
                            of
                            the
                            rights that you receive hereunder. You shall abide by all applicable local, state, national and
                            international laws and regulations.
                          </li>
                          <li>We also reserve the right to access, read, preserve, and disclose any information as we
                            reasonably
                            believe is necessary to (i) satisfy any applicable law, regulation, legal process or
                            governmental
                            request, (ii) enforce these Terms of Service, including investigation of potential violations
                            hereof,
                            (iii) detect, prevent, or otherwise address fraud, security or technical issues, (iv) respond to
                            user
                            support requests, or (v) protect the rights, property or safety of us, our users and the public.
                          </li>
                        </ol>
                      </li>
                      <li><span className={classes.chapterTitle}>Third Party Services</span>. The Services may permit you to
                        link to other websites, services
                        or resources on the Internet, and other websites, services or resources may contain links to the
                        Services.
                        When you access third party resources on the Internet, you do so at your own risk. These other
                        resources
                        are not under our control, and you acknowledge that we are not responsible or liable for the
                        content,
                        functions, accuracy, legality, appropriateness or any other aspect of such websites or resources.
                        The
                        inclusion of any such link does not imply our endorsement or any association between us and their
                        operators. You further acknowledge and agree that we shall not be responsible or liable, directly or
                        indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use
                        of or
                        reliance on any such content, goods or services available on or through any such website or
                        resource.
                      </li>
                      <li><span className={classes.chapterTitle}>Termination</span>. We may terminate your access to all or
                        any
                        part of the Services at any
                        time, with or without cause, with or without notice, effective immediately, which may result in the
                        forfeiture and destruction of all information associated with your membership. If you wish to
                        terminate
                        your Account, you may do so by following the instructions on the Site or through the Services. Any
                        fees
                        paid hereunder are non-refundable. All provisions of these Terms of Service which by their nature
                        should
                        survive termination shall survive termination, including, without limitation, licenses of User
                        Content,
                        ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                      </li>
                      <li><span className={classes.chapterTitle}>Warranty Disclaimer</span>.
                        <ol type="a">
                          <li>We have no special relationship with or fiduciary duty to you. You acknowledge that we have no
                            duty
                            to take any action regarding:
                            <ol type="i">
                              <li>which users gain access to the Services;</li>
                              <li>what Content you access via the Services; or</li>
                              <li>how you may interpret or use the Content.</li>
                            </ol>
                          </li>
                          <li>You release us from all liability for you having acquired or not acquired Content through the
                            Services. We make no representations concerning any Content contained in or accessed through the
                            Services, and we will not be responsible or liable for the accuracy, copyright compliance, or
                            legality
                            of material or Content contained in or accessed through the Services.
                          </li>
                          <li>THE SERVICES AND CONTENT ARE PROVIDED “AS IS”, “AS AVAILABLE” AND WITHOUT WARRANTY OF ANY
                            KIND,
                            EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE,
                            NON-INFRINGEMENT,
                            MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE
                            OF
                            PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED. WE, AND OUR DIRECTORS,
                            EMPLOYEES, AGENTS, SUPPLIERS, PARTNERS AND CONTENT PROVIDERS DO NOT WARRANT THAT: (I) THE
                            SERVICES
                            WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (II) ANY DEFECTS OR ERRORS WILL
                            BE
                            CORRECTED; (III) ANY CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE SERVICES IS FREE OF VIRUSES
                            OR
                            OTHER HARMFUL COMPONENTS; OR (IV) THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS.
                            YOUR
                            USE OF THE SERVICES IS SOLELY AT YOUR OWN RISK.
                          </li>
                        </ol>
                      </li>
                      <li><span className={classes.chapterTitle}>Indemnification</span>. You shall defend, indemnify, and
                        hold
                        harmless us, our affiliates and
                        each of our and their respective employees, contractors, directors, suppliers and representatives
                        from
                        all
                        liabilities, claims, and expenses, including reasonable attorneys’ fees, that arise from or relate
                        to
                        your
                        use or misuse of, or access to, the Services, Content, or otherwise from your User Content,
                        violation of
                        these Terms of Service, or infringement by you, or any third party using your Account or identity in
                        the
                        Services, of any intellectual property or other right of any person or entity. We reserve the right
                        to
                        assume the exclusive defense and control of any matter otherwise subject to indemnification by you,
                        in
                        which event you will assist and cooperate with us in asserting any available defenses.
                      </li>
                      <li><span className={classes.chapterTitle}>Limitation of Liability</span>. IN NO EVENT SHALL WE, NOR
                        OUR
                        DIRECTORS, EMPLOYEES, AGENTS,
                        PARTNERS, SUPPLIERS OR CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY,
                        NEGLIGENCE
                        OR
                        ANY OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO THE SERVICES (I) FOR ANY LOST PROFITS, DATA
                        LOSS,
                        COST
                        OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE,
                        COMPENSATORY
                        OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER (HOWEVER ARISING), (II) FOR ANY BUGS, VIRUSES,
                        TROJAN
                        HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGINATION), OR (III) FOR ANY DIRECT DAMAGES IN
                        EXCESS
                        OF (IN THE AGGREGATE) OF the greater of (A) fees paid to us for the particular Services during the
                        immediately previous three (3) month period or (B) $500.00.
                      </li>
                      <li><span className={classes.chapterTitle}>Governing Law and Jurisdiction</span>. These Terms of
                        Service
                        shall be governed by and
                        construed in accordance with the laws of the State of New Jersey, including its conflicts of law
                        rules,
                        and the United States of America. You agree that any dispute arising from or relating to the subject
                        matter of these Terms of Service shall be governed by the exclusive jurisdiction and venue of the
                        state
                        and Federal courts of Essex County, New Jersey.
                      </li>
                      <li><span className={classes.chapterTitle}>Modification</span>. We reserve the right, in our sole
                        discretion, to modify or replace any of
                        these Terms of Service, or change, suspend, or discontinue the Services (including without
                        limitation,
                        the
                        availability of any feature, database, or content) at any time by posting a notice on the Site or by
                        sending you notice through the Services, via e-mail or by another appropriate means of electronic
                        communication. We may also impose limits on certain features and services or restrict your access to
                        parts
                        or all of the Services without notice or liability. While we will timely provide notice of
                        modifications,
                        it is also your responsibility to check these Terms of Service periodically for changes. Your
                        continued
                        use of the Services following notification of any changes to these Terms of Service constitutes
                        acceptance
                        of those changes, which will apply to your continued use of the Services going forward. Your use of
                        the
                        Services is subject to the Terms of Service in effect at the time of such use.
                      </li>
                      <li><span className={classes.chapterTitle}>Miscellaneous</span>.
                        <ol type="a">
                          <li><span className={classes.chapterTitle}>Entire Agreement and Severability</span>. These Terms
                            of
                            Service are the entire agreement
                            between you and us with respect to the Services, including use of the Site, and supersede all
                            prior
                            or
                            contemporaneous communications and proposals (whether oral, written or electronic) between you
                            and
                            us
                            with respect to the Services. If any provision of these Terms of Service is found to be
                            unenforceable
                            or invalid, that provision will be limited or eliminated to the minimum extent necessary so that
                            these
                            Terms of Service will otherwise remain in full force and effect and enforceable. The failure of
                            either
                            party to exercise in any respect any right provided for herein shall not be deemed a waiver of
                            any
                            further rights hereunder.
                          </li>
                          <li><span className={classes.chapterTitle}>Force Majeure</span>. We shall not be liable for any
                            failure to perform our obligations
                            hereunder where such failure results from any cause beyond our reasonable control, including,
                            without
                            limitation, mechanical, electronic or communications failure or degradation.
                          </li>
                          <li><span className={classes.chapterTitle}>Assignment</span>. These Terms of Service are personal
                            to
                            you, and are not assignable,
                            transferable or sublicensable by you except with our prior written consent. We may assign,
                            transfer
                            or
                            delegate any of our rights and obligations hereunder without consent.
                          </li>
                          <li><span className={classes.chapterTitle}>Agency</span>. No agency, partnership, joint venture,
                            or
                            employment relationship is
                            created as a result of these Terms of Service and neither party has any authority of any kind to
                            bind
                            the other in any respect.
                          </li>
                          <li><span className={classes.chapterTitle}>Notices</span>. Unless otherwise specified in these
                            Term of
                            Service, all notices under
                            these Terms of Service will be in writing and will be deemed to have been duly given when
                            received,
                            if
                            personally delivered or sent by certified or registered mail, return receipt requested; when
                            receipt
                            is electronically confirmed, if transmitted by facsimile or e-mail; or the day after it is sent,
                            if
                            sent for next day delivery by recognized overnight delivery service. Electronic notices should
                            be
                            sent
                            to&nbsp;
                            <a href={mail}>info@open990.com.</a>
                          </li>
                          <li><span className={classes.chapterTitle}>No Waiver</span>. Our failure to enforce any part of
                            these
                            Terms of Service shall not
                            constitute a waiver of our right to later enforce that or any other part of these Terms of
                            Service.
                            Waiver of compliance in any particular instance does not mean that we will waive compliance in
                            the
                            future. In order for any waiver of compliance with these Terms of Service to be binding, we must
                            provide you with written notice of such waiver through one of our authorized representatives.
                          </li>
                          <li><span className={classes.chapterTitle}>Headings</span>. The section and paragraph headings in
                            these Terms of Service are for
                            convenience only and shall not affect their interpretation.
                          </li>
                        </ol>
                      </li>
                    </ol>
                    <p><span className={classes.chapterTitle}>Contact</span>. You may contact us by email at <a
                      href={mail}>info@open990.com</a>&nbsp;or at PO Box 1209, Maplewood, NJ 07040.
                    </p>
                    <p><span className={classes.chapterTitle}>Effective Date of Terms of Service</span>: April 8, 2018</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </MaxContainer>
        </div>
      </Fragment>);
  }
}
export default withStyles(styles)(TermsOfService);

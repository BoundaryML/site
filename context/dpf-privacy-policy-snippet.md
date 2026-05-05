# DPF Privacy Policy Snippet — Reinstate after certification

This file holds the DPF-related sections that were removed from `public/privacy.html` while Gloo Chat Inc.'s first-time DPF self-certification is under review. The DPF team requires that organizations not claim DPF participation in their published privacy policy until the submission is finalized.

## When to re-add

Once the DPF team (dpf.program@trade.gov) notifies us that our DPF submission is finalized, paste the HTML block below back into `public/privacy.html` immediately after this paragraph (the SCCs paragraph, currently the last `<p>` under `<h3 id="international-transfer-of-personal-information">`):

> "Where your personal information is transferred outside of the EEA, Switzerland and UK..."

…and immediately before:

```html
<h3 id="boundary-communications-with-you">Boundary communications with you</h3>
```

## HTML to paste back

```html
<p>Boundary complies with the EU-U.S. Data Privacy Framework (&quot;<strong>EU-U.S. DPF</strong>&quot;), the UK Extension to the EU-U.S. Data Privacy Framework (&quot;<strong>UK Extension to the EU-U.S. DPF</strong>&quot;), and the Swiss-U.S. Data Privacy Framework (&quot;<strong>Swiss-U.S. DPF</strong>&quot;) as set forth by the U.S. Department of Commerce. Boundary has certified to the U.S. Department of Commerce that it adheres to the EU-U.S. DPF Principles with regard to the processing of personal data received from the European Union in reliance on the EU-U.S. DPF and that it adheres to the UK Extension to the EU-U.S. DPF Principles with regard to the processing of personal data received from the United Kingdom (and Gibraltar) in reliance on the UK Extension to the EU-U.S. DPF. Boundary has certified to the U.S. Department of Commerce that it adheres to the Swiss-U.S. DPF Principles with regard to the processing of personal data received from Switzerland in reliance on the Swiss-U.S. DPF. If there is any conflict between the terms in this privacy policy and the EU-U.S. DPF Principles, the UK Extension to the EU-U.S. DPF Principles, and/or the Swiss-U.S. DPF Principles (together, the &quot;<strong>DPF Principles</strong>&quot;), the DPF Principles shall govern. To learn more about the Data Privacy Framework (&quot;<strong>DPF</strong>&quot;) program, and to view our certification, please visit <a href="https://www.dataprivacyframework.gov/">https://www.dataprivacyframework.gov/</a> .</p>
<p>In compliance with the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF. Gloo Chat Inc. commits to cooperate and comply with the advice of the panel established by the EU data protection authorities (DPAs), the UK Information Commissioner’s Office (ICO), and the Swiss Federal Data Protection and Information Commissioner (FDPIC) with regard to unresolved complaints concerning our handling of human resources data received in reliance on the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF in the context of the employment relationship.</p>
<p>For the actions of third party agents Boundary engages to process data on our behalf, Boundary remains responsible and liable under the DPF Principles if a third party agent processes the Personal Data in a manner inconsistent with the DPF Principles, unless Boundary proves that it is not responsible for the event giving rise to the damage.</p>
<h3 id="choice">Choice</h3>
<p>Boundary offers individuals the opportunity to choose (opt out) whether their personal information is (a) to be disclosed to a third party (other than agents acting on our behalf to perform tasks on the basis of our instructions), or (b) to be used for a purpose that is materially different from the purpose(s) for which it was originally collected or subsequently authorized by the individuals. For sensitive personal information, Boundary will obtain affirmative express consent (opt in) before such information is disclosed to a third party or used for a purpose other than those for which it was originally collected or subsequently authorized. To exercise these choices, please contact us at privacy@boundaryml.com.</p>
<h3 id="disputes">Disputes</h3>
<p>As part of our commitment to the DPF Principles, if you are a resident of the European Union, UK, or Switzerland and you have a privacy or data use concern, please contact Boundary directly at privacy@boundaryml.com and Boundary will use its best efforts to address your concern within 45 days of receipt of your complaint. For an unresolved privacy or data use concern that Boundary has not addressed satisfactorily, please contact our U.S. based third party dispute resolution provider, JAMS (free of charge) at <a href="https://www.jamsadr.com/dpf-dispute-resolution">https://www.jamsadr.com/dpf-dispute-resolution</a></p>
<p>For any DPF disputes that cannot be resolved by the methods above, you may be able to invoke a binding arbitration process under certain conditions. To find out more about the DPF&#39;s binding arbitration scheme, please see Annex I of the DPF Principles, here: <a href="https://www.dataprivacyframework.gov/s/article/Participation-Requirements-Data-Privacy-Framework-DPF-Principles-dpf">https://www.dataprivacyframework.gov/s/article/Participation-Requirements-Data-Privacy-Framework-DPF-Principles-dpf</a> . The Federal Trade Commission has investigation and enforcement authority over Boundary’s compliance with EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF.</p>
```

## Also remember to

- Bump the "Last Updated" date at the bottom of `public/privacy.html`.
- Delete this file (or mark it obsolete) once the snippet is back in the policy.

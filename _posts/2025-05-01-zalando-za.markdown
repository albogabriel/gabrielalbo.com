---
layout: project
title:  "Zalando Assistant"
start-date: May 2025
end-date: Feb 2026
category: projects
current-page: portfolio-item
highlighted-project: "yes"
image: "hero-zalando.png"
short-description: "Zalando's AI-powered Fashion Assistant: Search Results Integration, Streaming Experience and Outfit generation"
skills: [Interaction design, AI Conversational Experience, Information Architecture, Accessibility]
skills-used: ['Interaction design','AI Conversational Experience', 'Information Architecture', 'Accessibility']
---

<div class="project-image-container">
	<span>
		<img class="project-image project-image-hero" src="{{ site.baseurl }}/assets/images/projects/hero-zalando.png" alt=""/>
	</span>
</div>

<div class="project-summary">

<div class="category-description">CHALLENGE</div>
<p>
Scale Zalando’s GenAI assistant to drive user retention and high-value shopping actions (HVAs). 
The objective was to leverage LLM capabilities to increase <b>Monthly Active Users (MAU)</b> and 
<b>Discovery Repeat Sessions (DRS)</b>.
</p>


<div class="category-description">ROLE</div>
<p>
Lead product designer for three key workstreams within the Zalando Assistant, collaborating 
closely with Product Management, Applied Science, Engineering and fellow designers to design 
solutions that solved customer problems while remaining technically feasible and measurable 
through experimentation.
</p>


<div class="category-description">KEY WORKSTREAMS</div>
<ul>
	<li><b>Search Results Integration:</b> Designed UI that detects search intent and surfaces AI guidance when traditional search results fall short.</li>
	<li><b>Streaming Experience:</b> Reduced perceived latency by designing a progressive response UI that delivers value earlier in the interaction.</li>
	<li><b>Desktop Outfit Building:</b> Translated mobile-first AI styling experiences to desktop.</li>
</ul>


<div class="category-description">APPROACH</div>
<p>
Worked in high-velocity multidisciplinary sprints, launching A/B experiments ahead of peak 
traffic seasons to validate ideas with real user behavior while ensuring seamless integration 
with existing Zalando experiences.
</p>


<div class="category-description">RESULTS</div>
<ul>
	<li><b>User Growth:</b> Surpassed internal targets, exceeding initial MAU goals by <b>135%</b>.</li>
	<li><b>Engagement:</b> Increased high-value actions such as Add-to-Cart and Wishlist interactions.</li>
	<li><b>Business Impact:</b> Improved conversion, reduced return rates and secured increased internal investment for the product.</li>
</ul>
<br>
</div>

<p>
As part of the Personalization, Recommendations, Search and Browse (PRSB) team, I worked on 
the growth of the <b>Zalando Assistant (ZA)</b>, an AI-powered conversational assistant that 
provides personalized fashion advice and product recommendations.
</p>

<p>
My work focused on three initiatives — Search Results Integration, Outfit Building and the 
Streaming Experience — collaborating with engineers, product managers, applied scientists 
and designers to create features that increased customer engagement and supported the 
product’s growth strategy.
</p>

<h2 class="section-title">Search Results Integration</h2>

<p>
The main initiative I worked on for ZA was integrating the assistant into Zalando’s traditional 
search results experience, which I led from a design perspective.
</p>

<h3>Problem</h3>

<p>
Traditional keyword search performs well for precise product queries but struggles with 
intent-driven or trend-based searches.
</p>

<p>
For example, searching for <b>“Nike Air Force 1”</b> returns highly relevant results. 
However, searching for a fashion trend such as <b>“old money”</b> often produces results 
that do not match the user’s intended style.
</p>

<!-- images of a high success query and a low success query -->


<h3>Opportunity</h3>

<p>
We identified that the Zalando Assistant could help interpret customer intent and guide 
users toward more relevant products by leveraging its conversational capabilities.
</p>


<h3>Design Challenge</h3>

<p>
At the time, ZA existed primarily as a standalone conversational experience. The challenge 
was integrating it into the search results without distracting from strong search results 
or negatively affecting conversion.
</p>

<p>
Another key goal was to launch the solution as an experiment that would allow us to learn 
more about customer behavior and continuously improve how ZA supports users in their 
shopping journeys.
</p>


<h3>Solution</h3>

<p>
After exploring multiple interaction patterns and reviewing concepts with senior leadership, 
we introduced a <b>bottom-sheet (“drawer”) interface</b> that adapts to the quality of the 
search results.
</p>

<p>
The assistant behaves differently depending on the success of the query:
</p>
<!-- images of drawer in different states -->
<div class="image-row-3">
	<span>
		<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/01.png" alt=""/>
		<figcaption>ZA responding to a search with low success</figcaption>
	</span>
	<span>
		<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/02.png" alt=""/>
		<figcaption>ZA drawer expanded to explore better results</figcaption>
	</span>
	<span>
		<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/03.png" alt=""/>
		<figcaption>ZA drawer fully minimized</figcaption>
	</span>
</div>
<br>
<div class="image-row-2">
	<span class="left-img">
		<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/04.png" alt=""/>
		<figcaption>ZA responding to a search with high success</figcaption>
	</span>
	<span class="right-img">
		<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/05.png" alt=""/>
		<figcaption>ZA drawer expanded to explore more aspects fof the good results</figcaption>
	</span>
</div>
 <br>
<ul>
	<li>
	<b>High-success queries:</b> ZA appears minimized, remaining accessible without 
	distracting from strong search results.
	</li>

	<li>
	<b>Low-success queries:</b> ZA appears partially expanded, prompting the user to refine 
	their intent. Interacting with it expands the assistant and helps users discover more 
	relevant products.
	</li>
</ul>
<br>

<h3>Accessibility (a11y)</h3>
<p>
I have always been very mindful of a11y - during my time as a trainer at <a link="{{ site.baseurl }}/_posts/2022-03-01-twu.markdown">Thoughtworks University</a> I co-authored and ran a session on the subject and have worked extensively with the theme. Moreover, this project was to be delivered at the time when the European Accessibility Act 2025 would be taking effect, so a11y was more than a nice feature to have, but an actual legal requirement.
</p>
<p>
With that context in mind, I have worked with the Zalando a11y Core Team and our ZA engineering team to make sure we covered all our bases. From a design perspective, that meant creating clear a11y annotations for tab order for screen readers and defining the designs for alternate displays - dark mode, landscape, dynamic text sizes. Here are some examples of how we defined those:
</p>
<div class="project-image-container-centralized" style="width: 80%;">
	<span> 
	 	<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/a11y01.png" alt=""/>
	 	<figcaption>Examples of how I mapped designs for alternate experiences - dark mode, dynamic text and landscape - for one of the states of the ZA drawer </figcaption>
	</span>
</div>
<br>
<div class="project-image-container-centralized" style="width: 80%;">
	<span> 
	 	<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/a11y02.png" alt=""/>
	 	<figcaption>Annotations for the tab order for screen readers for the same component state</figcaption>
	</span>
</div>
<br>

<h3>Collaboration</h3>

<p>
I worked closely with Applied Scientists, Product Managers and Engineers to ensure we 
targeted the most relevant queries and aligned the solution with both business and 
strategic goals.
</p>

<p>
Because of my background in front-end engineering, I frequently paired with engineers to 
refine interaction details and balance experience quality with technical constraints, 
allowing us to find effective trade-offs between the desired experience and feasible 
implementation within our timelines.
</p>


<h3>Impact</h3>

<p>
The experiment launched a few weeks before <b>Cyber Week</b>, one of Zalando’s highest 
traffic periods.
</p>

<p>
The results confirmed that the integration did not negatively impact the traditional 
search flow and significantly increased engagement with the Zalando Assistant.
</p>

<p>
Prior to the launch, ZA had reached approximately <b>60% of its annual MAU target</b>. 
By the end of the year, that goal was exceeded by <b>135%</b>.
</p>

<p>
The experiment also increased high-value actions within the assistant experience and 
helped customers discover more relevant products, contributing to improved customer 
satisfaction and lower return rates.
</p>

<div class="project-alternate">
	<h2 class="section-title">Streaming Experience</h2>

	<p>
	I have also lead the design aspects of the ZA Streaming Experience - that is, progressive rendering of the LLM's responses in text and images so that we could improve the customer experience regarding the latency that is inherent to the use of an LLM for a conversational experience.
	</p>

	<h3>Problem</h3>
	<p>
	There was just so much that we could do from a technical perspective to reduce the latency that might occur regarding receiving answers from the LLM and being able to present them to the customers. While efforts on that area are constant from the engineering side, we wanted to create a good way to mitigate them and deliver valuable responses as soon as possible.
	</p>

	<h3>Opportunity</h3>

	<p>
	We identified that ZA could process and render its responses faster if they were delivered progressively. That is a common practice by most of the major players in conversational AI experiences in the market and could fit us well, given the type of settings we format for ZA (short replies, visually engaging and actionable product suggestions, etc.). So we decided to follow that route.
	</p>

	<h3>Design Challenge</h3>

	<p>
	We wanted to make sure we were not simply distracting users with on-screen movement - we wanted to deliver valuable progressive rendering. At the same time, latency wasn't necessarily unbearable most of the time, so progressively rendering at low speeds in a way that would delay the full render of the content was also to be avoided. Striking that balance required a lot of research and direct collaboration with applied sciences on the latency metrics for different types of requests and with the engineering team for fast tweaks and checks.
	</p>
	<p>
	I ran very extensive benchmarking of current solutions in the market and researched scientific papers that would help guide us towards a better experience.
	</p>

	<div class="project-image-container-centralized" style="width: 80%;">
		<span> 
		 	<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/streaming-benchmark.png" alt="ZA Streaming Benchmark"/>
		 	<figcaption>Benchmark of streaming experiences with detailed analysis, comparisons and conclusions</figcaption>
		</span>
	</div>
	<br>

	<h3>Solution</h3>
	<p>After benchmarking, researching and running a couple of tests with the help of the engineering team, we decided that the best approach would be to render chunks of words at a time, following something close to 10-15 words per second, which is above human reading speed (3-5 words per second), but provides the feedback of a live experience and is still a speed that can be followed. Since ZA responses are designed not to be too long in text form, we needed a rendering speed that wouldn't actually delay the full message. 

	I also designed small transitions, fading-in new text and the next lines to create a smoother reading experience.</p>

	<div class="image-row-2">
	<span class="left-img">
		<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/streaming01.png" alt="ZA Streaming"/>
		<figcaption>ZA streaming the first message</figcaption>
	</span>
	<span class="right-img">
		<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/streaming02.png" alt="ZA Streaming"/>
		<figcaption>ZA streaming a response</figcaption>
	</span>
</div>

	<p>Likewise, we designed all product cards that are presented as suggestions to have a little placeholder animation while loading. Their loading speed is actually quite fast, but that prevents the UI elements from jumping around as things get loaded. 

	One other important aspect is that we made all the "thinking" stages more descriptive, providing real time feedback to the user on what actions are happening in the background instead of presenting a generic "loading" message. Processing feedback was enhanced by the existing background animation that played with the Zalando logo.</p>

	<div class="project-image-container-centralized">
		<span> 
	 		<img class="project-image" src="{{ site.baseurl }}/assets/images/projects/zalando/streaming03.png" alt="Image Placeholder and a different loading message" style="width:24.621%;"/>
	 		<figcaption>Loading images with a placeholder animation and with a distinct message</figcaption>
		</span>
	</div>
	<br>

	<p>Given the short timeline we had to deliver this before our next round of testing and some more complex engineering aspects of implementing this <i>chunking</i>, we compromised on a solution that would start by rendering character by character to later deploy the actual chunks of words. This way, we would still be able to measure the general impact in customer satisfaction regarding waiting times due to latency while working on the implementation of the desired experience.</p>

	<!-- Images of designs -->


<h3>Collaboration</h3>
<p>Again, my previous experiences working directly on code helped me a lot in the design process. Though I put a lot of research on how we would like the rendering to go, we needed to test with real ZA cases - the type of messages we get, the latency variations, etc. - how those solutions would perform. I had many pairing sessions with engineers in which we tweak changes directly on code so we could immediatelly get a better feel of the pros and cons of each approach when it came to text rendering speed, pauses between words, sentences and paragraphs, etc.. This made our process much more agile, as we it reduced the feedback cycle significantly.</p>

<p>The engineering team was all located in Shenzhen, China, while I was located in Berlin, Germany. We made sure to strealine our communication and make the most out of our concurrent hours working together.</p>

<h3>Impact</h3>
<p>As of March 2026, we're still measuring the long term impact of the solution we delivered. Initial assessments, however, have indicated a good reduction on abandonment of the experience (customers closing ZA while answers were being loaded) and an increase in HVAs (High Value Actions) regarding clicks on the product cards and products being added to the wishlist, which indicates general engagement with the feature has been improved.</p>

</div>

<br>
<span class="category-description">LOCATIONS:</span>
Berlin, Germany. Distributed team across Germany, Switzerland and China.

<span class="category-description">PROCESS, TECHNOLOGIES AND TECHNIQUES:</span>{% for item in page.skills-used %}<span class="skill-item">{{ item }}</span> {% endfor %} 




---
layout: page
title: Liste des tags
permalink: /projets/tag/
---

<ul>
  {% assign project_tags = site.projects | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
  {% for tag in project_tags %}
    {% unless tag == "" %}
      <li>
        <a href="{{ tag | slugify | prepend: '/projets/tag/' | relative_url }}">
          <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
        </a>
      </li>
    {% endunless %}
  {% endfor %}
</ul>

# Introduction

## Overview

![](./img/factor-logo-2.svg)

**Factor** is a platform that makes it easy to build impressive Javascript apps.

It is based on the MEVN Stack ([MongoDB](https://github.com/mongodb/mongo), [Express](https://expressjs.com), [VueJs](https://vuejs.org), [NodeJS](https://nodejs.org/en/)) and its purpose is to worry about best practices so you don't have to...

Unlike most Javascript frameworks, Factor has its primary focus on extension via plugins and themes. It also includes a CMS-oriented dashboard and data model (which are leveraged by extensions).

Factor's end goal is to help you build complete web apps without spending time reinventing the wheel.

## Goals and Non-Goals

The goal of Factor is to help front-end developers ship web apps they can be proud of.

If you work with Javascript and spend lots of time doing rewrites, dealing with bugs and worrying about vendor lock-in then Factor is likely built for you.

**Goals:**

- Focus on the needs of front-end developers
- "One-click" plugin installation and configuration (`yarn add ...`)
- Robust theme system
- Reduce the need to "reinvent the wheel"
- Minimize vendor lock-in
- Create a simple and elegant development experience
- Follow modular and minimal design patterns

**Non-Goals**

- No drag-and-drop builder bloat (_can be added via extension_)
- No needless abstraction (_minimal 3rd party code_)
- No UI framework bloat e.g. Material, Bootstrap (_can be added via themes_)
- No bloat in general (yes, we hate bloat)

## Core Ideas

Factor is a combination of the following:

- An extension system for plugins and themes
- A "Universal" Javascript framework (Vue SSR, Node)
- A CMS oriented dashboard and data management model

![Factor Diagram](./img/factor-venn-diagram.svg)

### The Framework

Factor, at its heart, is a system that coordinates different developer tools and environments to create a consistent and simple development experience.

While you've probably seen many JS frameworks out there, what sets Factor apart is an effort on simplicity and extension.

### Extensions

#### Plugins

In Factor, adding (or removing) plugins is as simple as `yarn add some-plugin`. Plugins automatically set themselves up and even add tools for setting options and config (with the `factor setup` CLI).

Plugins can add all sorts of functionality. We've already added plugins for things like SEO, sitemaps, analytics, notifications, comments and more.

#### Themes

Theming has been neglected in JS frameworks. Factor seeks to remedy this.

The scope of a Factor theme is to give you an advanced starting point for your app and it can save you a ton of time. Themes add or include extensions of their own, and include useful templates and UI tools.

<hr>

Learn more about [adding extensions &rarr;](./extension-basics)

### Dashboard

The real magic behind Factor is all about the dashboard and data model. Because these are standard, plugins and themes can leverage this to help you with "CMS oriented" functionality like user logins, page editing and so on.

With the dashboard, something like adding a new blog post takes seconds. No more worrying about rebuilding your app every time you need to make a change.

## Next Steps

We’ve briefly introduced the most basic features of Factor - the rest of this guide will cover them and other advanced features with much finer details, so let's dig in.
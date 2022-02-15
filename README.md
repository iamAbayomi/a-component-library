# Design System


## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)


### Motivation.  
---

The aim of this project was to learn how to build a react component library. You can check the storybook canvas and documentation on chromatic at [https://6207da00fd8970003a4b561e-ujfarttnqg.chromatic.com/](https://6207da00fd8970003a4b561e-ujfarttnqg.chromatic.com/)
  
    

The components in the project are

- `Avatar` 

- `AvatarAndName`

- `Badge`

- `Button`

- `Card`

- `Checkbox`

- `Dropdown`

- `InputField`

- `Modal`

- `OverviewCard`


- `Typography`


## Screenshots

![Image](https://raw.githubusercontent.com/iamAbayomi/design-system/master/public/screenshot.png)


# Installation 
To download and install the component library
```
npm install spiinge-comp-lib
```

# Usage

Here is a quick example to help you get started. 

```
import React from 'react'
import ReactDOM from 'react-dom'
import Badge from 'spiinge-comp-lib'


function App(){
    return(
        <Badge text='successful' />
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));

```

## Status
`Design system` is still in progress. `Version 2` will be out soon.

## Credits
Resources: 

- [Storybook's Design system for developers](https://storybook.js.org/tutorials/design-systems-for-developers/)

- [Shopify Polaris Foundation](https://polaris.shopify.com/components/lists-and-tables/data-table#navigation)

## License

MIT license @ [Oladini Abayomi](https://oladiniabayomi.com)

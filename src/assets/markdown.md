


# What is Markdown?

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. 

https://www.markdownguide.org/getting-started

https://www.markdownguide.org/basic-syntax/
  
# Installing

From the CLI, install the `ngx-markdown` package. 

```
npm install ngx-markdown --save
```

Edit your `angular.json` file to add the following script; 

_This seems optional?_

```
in angular.json, add
"scripts": [
   "node_modules/marked/lib/marked.js"
]
```

In each page where you want to use markdown, edit the page's `.module.ts`,


```
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
```

```
@NgModule({
  imports: [
    ...
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClientModule }),
  ],
  ...
})
```

# Major Caveats

There are two basic ways to use the `ngx-markdown` library; 

1. **Inline**. Embed markdown inline in your HTML page, inside the `<markdown>` element.
1. **External**. Create an `.md` file, and reference it from your `<markdown>` element.

The *inline* approach seems to have very little use in IONIC-4 / Angular-7, because IONIC's (or Angular's?) parsers attempt to parse the markdown content as part of the template, and it breaks on basic things such as angle brackets (`<>`) or curly braces (`{}`).  
Because of this, the *inline* approach seems particularly fragile.

Note that making the `<markdown>` element `ngNonBindable` does not work here, as in;

```
<markdown ngNonBindable ngPreserveWhitespaces>
My { code }.
</markdown>
```

https://ngrefs.com/en/latest/templates/ngnonbindable

The above will cause a compiler error, and will also prevent the markdown parsing from occurring. 

The *external* approach avoids these parsing problems, however the `.md` files must be accessible by HTTP.
This means setting up routing to them, or storing them in your `/assets/` folder and referencing them there.


# Best Practices

Because you cannot use `{}` or `<>` in inline `<markdown>` content, 
and there is no known way to disable this parsing, 
it's best to reference and external `.md` file.

There, these constructions are not parsed as part of the IONIC/ Angular template and you can use them freely. 

However this presents routing issues, since an externally accessible URL needs to be used. 
The easiest way around this is to use the `/assets/` directory to store your `.md` files.

```
<markdown [src]="'/assets/mydoc.md'" ngPreserveWhitespaces>
</markdown>
```


https://github.com/jfcere/ngx-markdown




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

```
in angular.json, add
"scripts": [
   "node_modules/marked/lib/marked.js"
]
```

In page's `.module.ts`,


```
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
```

```
@NgModule({
  imports: [
    ...
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  ...
})
```

# Major Caveats

Cannot use certain template / code elements `markdown` content,
because it gets parsed at the template level as angular.
This is particularly if it's inline content in a markdown element.

https://ngrefs.com/en/latest/templates/ngnonbindable

`ngNonBindable` also does not work here, as in;

```
<markdown ngNonBindable ngPreserveWhitespaces>
My { code }.
</markdown>
```

The above will cause a compiler error, and will also prevent the markdown parsing from occurring. 

It may be possible to circumvent this using external referencing to an .md file,
however that has routing issues in IONIC-4, in that the .md's need to be directly exposed.

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

# Polygloty
A tiny i18n (internationalization) script that's written in vanilla JavaScript and doesn't have any dependencies.

## Usage

### Set-up

Put your translations in JSON-format a `<script>`-tag in the HEAD with id `#translations` and type `application/json`.
After the translations, import `polygloty.js`.

#### Example
```html
  <script id="translations" type="application/json">
        {
            "defaultLanguage": "nl",
            "nl": {
                "WEBSITE.HEADER.TITLE": "Welkom op mijn website",
                "WEBSITE.BODY.FIRST_PARAGRAPH": "Mijn naam is Tim, en dit is mijn website."
            },
            "en": {
                "WEBSITE.HEADER.TITLE": "Welcome to my web site",
                "WEBSITE.BODY.FIRST_PARAGRAPH": "My name is Tim, and this is my web site."
            },
            "de": {
                "WEBSITE.HEADER.TITLE": "Willkommen auf meiner Website",
                "WEBSITE.BODY.FIRST_PARAGRAPH": "Mein Name ist Tim, und dies ist meine Website."
            }
        }
    </script>
    <script src="polygloty.js" type="text/javascript">
```

Note: If `defaultLanguage` is not set in the JSON, `en` will be used as default.

### Apply

Use `data-translate` to assign the resource string that should be translated. Optionally, you can use `data-lang` to overwrite the default language setting.

#### Example
Input:

```html
<h1 data-translate="WEBSITE.HEADER.TITLE"></h1>
<p data-translate="WEBSITE.BODY.FIRST_PARAGRAPH" data-lang="en"></p>
<p>Auf deutsch: <span data-translate="WEBSITE.BODY.FIRST_PARAGRAPH" data-lang="de"></span></p>
<p>Chinese: <span data-translate="WEBSITE.BODY.FIRST_PARAGRAPH" data-lang="cn"></span></p>
```
Output:

```html
<h1>Welkom op mijn website</h1>
<p>My name is Tim, and this is my web site.</p>
<p>Auf deutsch: <span>Mein Name ist Tim, und dies ist meine Website.</span></p>
<p>Chinese: <span>Mijn naam is Tim, en dit is mijn website.</span></p> <!-- "cn" does not exist so it falls back to the default language, which is "nl" -->
```

Note: If `data-lang` is used, but the language or translation string in that language does not exist, the default language will be used.
If the default language or translation string in that language does not exist, the resource string itself will be shown.

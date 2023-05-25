# JS Mark

# Simple Examples

``` javascript
import { Mark, Schema } from "js-mark";

Schema.load('path-to-your-schema/schema.json');

const errors = Mark.validate([
    {
        "code": "leader",
        "value": "value"
    },
    {
        "code": "001",
        "value": "value"
    },
]);

console.log(errors);
```

## License
MIT
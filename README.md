# NestJS-Module
A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure. Each application has at least one module, a root module. The root module is the starting point Nest uses to build the application graph - the internal data structure Nest uses to resolve module and provider relationships and dependencies. While very small applications may theoretically have just the root module, this is not the typical case. We want to emphasize that modules are strongly recommended as an effective way to organize your components. Thus, for most applications, the resulting architecture will employ multiple modules, each encapsulating a closely related set of capabilities.

## Dekorator @Module() mengambil satu objek yang propertinya mendeskripsikan modul:
- providers
- controllers
- imports
- exports

## Written by Anju Lubis

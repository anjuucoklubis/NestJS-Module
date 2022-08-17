import { Module } from "@nestjs/common";
import { ExampleController } from "./example.controller";
import { ExampleService } from "./example.service";
import { ExampleTwoController } from "./exampletwo.controller";

@Module({
  controllers: [
    ExampleController,
    ExampleTwoController
  ],
  providers: [
    ExampleService
  ]
})
export class ExampleModule { }
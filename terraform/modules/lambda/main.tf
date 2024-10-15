resource "aws_lambda_function" "lambda_function" {
  function_name     = var.function_name
  role              = var.lambda_role_arn
  handler           = var.handler
  runtime           = var.runtime
  filename          = "${path.root}/terraform/.terraform/prediction-generator-lambda.zip"
  source_code_hash  = filebase64sha256("${path.root}/terraform/.terraform/prediction-generator-lambda.zip")

  environment {
    variables = var.lambda_environment_vars
  }
}

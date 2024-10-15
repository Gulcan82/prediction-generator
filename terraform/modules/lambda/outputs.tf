output "lambda_execution_role_arn" {
    description = "The ARN of the Lambda function."
    value = aws_lambda_function.lambda_function.arn
  
}
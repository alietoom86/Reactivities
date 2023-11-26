using Domain;
using FluentValidation;

namespace Application.Activities
{
    public class ActivityValidator : AbstractValidator<Activity>
    {
        public ActivityValidator()
        {
            RuleFor(e => e.Title).NotEmpty().MaximumLength(250);
            RuleFor(e => e.Description).NotEmpty();
            RuleFor(e => e.Date).NotEmpty();
            RuleFor(e => e.Category).NotEmpty().MaximumLength(100);
            RuleFor(e => e.City).NotEmpty().MaximumLength(100);
            RuleFor(e => e.Venue).NotEmpty().MaximumLength(100);
        }
    }
}
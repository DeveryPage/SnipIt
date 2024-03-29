﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CodeSnipIt.Models
{
    public class UserProfile
    {
        public int? Id { get; set; }


        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }


        [Required]
        [MaxLength(50)]
        public string DisplayName { get; set; }


        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }


        public DateTime CreateDateTime { get; set; }


        public bool IsActive { get; set; }
    }
}
